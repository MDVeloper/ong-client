import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { postArticle, putArticles } from '../../Store/Actions/actionArticles';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { Button, Box } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import CardHeader from '@mui/material/CardHeader';
import { Alert } from '@mui/material';
import { useDropzone } from 'react-dropzone';
import { actionRefreshArticles } from '../../Store/Actions/actionRefreshArticles';
import jwt_decode from "jwt-decode"
import Loading from '../Loading/Loading'

export const listHasValues = (list) => list.length > 0;
export const isEmptyList = (list) => list.length === 0;

export const dropzoneConfig = {
  multipleFiles: false,
  maxFiles: 1,
  validImages: 'image/jpeg, image/png',
};

const { multipleFiles, maxFiles, validImages } = dropzoneConfig;

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  margin: 'auto',
  width: 'auto',
  height: 60,
  padding: 4,
  boxSizing: 'border-box',
};

export default function Formulario({ history }) {
  let { id } = useParams()
  console.log(useParams())
  const dispatch = useDispatch();
  const result = useSelector((state) => state.articles.articles)
  console.log(result)
  const [error, setError] = useState({})

  const [form, setForm] = useState({
    id: id,
    title: "",
    img: "",
    description: "",
    category: "",
    voteCount: 0,
  })
  const [imageFiles, setImageFiles] = useState([]);
  const [base64ImageFile, setBase64ImageFile] = useState('');
  const [imageError, setImageError] = useState(false);
  const [userid, setuserid] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  if (!localStorage.getItem("token")) {
    window.location.href = '/login'
  }

  if (localStorage.getItem("token") && userid === "") {
    const data = localStorage.getItem("token")
    setuserid(jwt_decode(data))
    if (jwt_decode(data).privilege !== "Admin") {
      window.location.href = '/';
    }
    if (jwt_decode(data).privilege === "Admin") {
      setIsLoading(false)
    }
  };

  const handleDrop = (acceptedFiles, fileRejections) => {

    const imageFileWithPreview = addImagePreviewtoImageFile(acceptedFiles);

    setImageFiles(imageFileWithPreview);
    if (isEmptyList(fileRejections)) imageFileToBase64File(acceptedFiles);
  };

  const imageFileToBase64File = (acceptedFiles) => {
    const reader = new FileReader();

    reader.readAsDataURL(acceptedFiles[0]);
    reader.onload = () => {
      const base64 = reader.result;

      setBase64ImageFile(base64);
    };
  };
  const addImagePreviewtoImageFile = (acceptedFiles) => {
    return acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      }),
    );
  };
  const { getRootProps, getInputProps, fileRejections } = useDropzone({
    multiple: multipleFiles,
    maxFiles,
    accept: validImages,
    onDrop: (acceptedFiles, fileRejections) =>
      handleDrop(acceptedFiles, fileRejections),
  });

  const imageValidation = () => {
    if (listHasValues(fileRejections)) {
      setImageError(true);

      return;
    }
    setImageError(false);
  };

  useEffect(() => {
    imageValidation();
  }, [fileRejections]);

  const descriptionChange = (e, editor) => {
    const data = editor.getData();

    setForm({ ...form, description: data });
  };
  const nameChange = (e, values) => {
    // eslint-disable-next-line no-console
    console.log(values);
    setForm({ ...form, title: e.target.value });
  };
  const categoryChange = (e) => {
    setForm({ ...form, category: e.target.value });
  };




  function handleSubmit(e) {

    id !== true ? dispatch(postArticle(form, form.img = base64ImageFile)) : dispatch(putArticles(form, form.img = base64ImageFile))
    // id !== true ? dispatch(postArticle(form)) : dispatch(putArticles(form))
    alert("enviado satisfactoriamente")

    setTimeout(() => {
      dispatch(actionRefreshArticles())
    }, 2000)
  }



  return (
    <Formik
      initialValues={{
        title: '',
        img: '',
        description: '',
        category: '',
      }}
      validate={(values) => {
        let errors = {};

        //Name
        if (!values.title) {
          errors.title = 'Please submit a email';
        }
        //Image
        if (values.img === null) {
          errors.img = 'Please submit a image';
        } else if (values.img) {
          errors.img = false;
        }
        //Description
        if (!values.description) {
          errors.description = 'Please submit a description';
        }
        if (!values.category) {
          errors.category = 'Please submit a category'
        }
      }}
      onSubmit={(values) => {
        handleSubmit(values);
      }}>
      {({ errors, touched }) => {
        return (
          <>
            {isLoading === true ? <Loading /> : <Card sx={{ margin: '20px auto', width: '600px', height: '100%' }}>
              <CardHeader title={id ? 'EDITAR NOTICIA' : 'CREAR NOTICIA'} />
              <Form
                sx={{
                  padding: '60px',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  width: '600px',
                  height: '100%',
                }}>
                <InputLabel id="demo-simple-select-label">Titulo</InputLabel>
                <Field
                  fullWidth
                  component={TextField}
                  error={Boolean(touched.title && errors.title)}
                  id="title"
                  label="title"
                  name="title"
                  placeholder="Ingrese el titulo"
                  type="text"
                  value={form.title}
                  onChange={(e, values) => nameChange(e, values)}
                />
                <ErrorMessage
                  component={() => (
                    <Alert severity="warning">{errors.title}</Alert>
                  )}
                  name="title"
                />
                <InputLabel id="demo-simple-select-label">Descripcion</InputLabel>
                <section style={{ width: '80%', margin: '20px auto' }}>
                  <CKEditor
                    required
                    component={TextField}
                    data={form.description}
                    editor={ClassicEditor}
                    label="Description"
                    onChange={descriptionChange}
                  />
                </section>
                <ErrorMessage
                  component={() => (
                    <Alert severity="warning">{errors.description}</Alert>
                  )}
                  name="name"
                />
                <InputLabel id="demo-simple-select-label">Imagen</InputLabel>
                <Box className="dropzone-container" component="div" {...getRootProps()}>
                  <input {...getInputProps()} />
                  <p>
                    Arrastra una imagen o haz click aqui para agregarla ( .png o .jpg )
                  </p>
                  <div className="thumbs-container">
                    <div className="thumb">
                      <div className="thumbInner">
                        {listHasValues(imageFiles) && (
                          <img className="thumb-image" src={imageFiles[0].preview} />
                        )}
                      </div>
                    </div>
                  </div>
                </Box>
                <ErrorMessage
                  component={() => (
                    <Alert severity="warning">{errors.image}</Alert>
                  )}
                  name="image"
                />
                <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
                <Select fullWidth
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={form.category}
                  label="category"
                  onChange={(e) => categoryChange(e)}
                >
                  <MenuItem value={"News"}>Noticias</MenuItem>
                  <MenuItem value={"Projects"}>Proyectos</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <Button
                  className="submit-btn"
                  type="submit"
                  variant="contained"
                  onClick={() => handleSubmit()}>
                  Send
                </Button>
              </Form>
            </Card>}
          </>
        );
      }}
    </Formik>
    // <div>
    //   <h1>FORMULARIO DE CREACION</h1>
    //   <form>
    //     <input 
    //     type="text"
    //     name="title"
    //     value={form.title}
    //     placeholder="title"
    //     onChange={(e) => handleChange(e)}
    //     required
    //     />
    //     {error.title &&(
    //         <p >{error.title}</p>
    //     )}
    //     <input 
    //     type="text"
    //     name="description"
    //     value={form.description}
    //     placeholder="description"
    //     onChange={(e) => handleChange(e)}
    //     required
    //     />
    //     {error.description &&(
    //         <p >{error.description}</p>
    //     )}
    //     <input 
    //     type="text"
    //     name="img"
    //     value={form.img}
    //     placeholder="img"
    //     onChange={(e) => handleChange(e)}
    //     required
    //     />
    //     {error.img &&(
    //         <p >{error.img}</p>
    //     )}
    //     <input 
    //     type="text"
    //     name="category"
    //     value={form.category}
    //     placeholder="category"
    //     onChange={(e) => handleChange(e)}
    //     required
    //     />
    //     {error.category &&(
    //         <p >{error.category}</p>
    //     )}
    //   </form>
    //   <button onClick={(e) => handleSubmit(e)} type="submit">create</button>
    // </div>
  )
}