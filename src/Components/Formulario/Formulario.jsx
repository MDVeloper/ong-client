import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { postArticle, putArticles } from '../../Store/Actions/actionArticles';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { Button, Box} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import CardHeader from '@mui/material/CardHeader';
import { Alert } from '@mui/material';
import { useDropzone } from 'react-dropzone';
import { actionRefreshArticles } from '../../Store/Actions/actionRefreshArticles';
import Styles from './Formulario.module.css'



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

  const dispatch = useDispatch();
  const result = useSelector( (state) => state.articles.articles)

  const [error, setError] = useState({})
  const [form, setForm] = useState({
    id: id,
    title: "",
    img: "",
    description: "",
    category: "",
    voteCount:0,
  })
  
  const [imageFiles, setImageFiles] = useState([]);
  const [base64ImageFile, setBase64ImageFile] = useState('');
  const [imageError, setImageError] = useState(false);

  if (!localStorage.getItem("token")){
    history.push('/login')
  }

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

    setForm({ ...form, title: e.target.value });
  };

  const categoryChange = (e) => {
    setForm({ ...form, category: e.target.value });
  };


  function handleSubmit(e){
    
    
  }


  function handleSubmit(e){
    
    id !== true ? dispatch(postArticle(form, form.img= base64ImageFile)) : dispatch(putArticles(form, form.img= base64ImageFile))
    // id !== true ? dispatch(postArticle(form)) : dispatch(putArticles(form))
    alert("enviado satisfactoriamente")

    setTimeout(() => {
      dispatch(actionRefreshArticles())
    }, 2000)
  }

  

  return (
    <div className={Styles.container}>
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
        if (form.title === "") {
          errors.title = 'Requerido';
        }

        //Description
        if (form.description === "" || form.description.length < 200) {
          errors.description = 'Ingrese descripcion con mas de 200 caracteres';
        }
        if (form.category=== ""){
          errors.category = 'Requerido'
        }

        return errors;
      }}  

      onSubmit={(values,errors) => {

        handleSubmit(values);
      }}>
        {({ errors, touched }) => {
        return (
          <Card className={Styles.CardContainer}>
        
            {
              id 
              ?
              <h1>MODIFICAR ARTICULO</h1>
              :
              <h1>CREAR ARTICULO</h1>
            }


            <Form className={Styles.containerInputs}>
      
                <InputLabel className={Styles.label}>Titulo</InputLabel>
                <Field
                  className={Styles.inputs}
                  component={TextField}
                  id="title"
                  name="title"
                  placeholder="Ingrese el titulo"
                  type="text"
                  value={form.title}
                  onChange={(e, values) => nameChange(e, values)}
                />
                <ErrorMessage
                  component={() => (
                    <Alert style={{width:"95%"}} severity="warning">{errors.title}</Alert>
                  )}
                  name="title"
                />

                <InputLabel className={Styles.label}>Descripcion</InputLabel>
                <div className={Styles.inputs}>
                  <CKEditor
                    data={form.description}
                    editor={ClassicEditor}
                    label="Description"
                    onChange={descriptionChange}
                  />
                </div>
                <ErrorMessage
                  component={() => (
                    <Alert style={{width:"95%"}} severity="warning">{errors.description}</Alert>
                  )}
                  name="description"
                />
                
                <InputLabel className={Styles.label}>Imagen</InputLabel>
                <Box className={Styles.inputs}  component="div" {...getRootProps()}>
                  <input {...getInputProps()} />
                  <p>
                    Arrastra una imagen o haz click aqui para agregarla ( .png o .jpg )
                  </p>
                  <div className="thumbs-container">
                    <div className="thumb">
                      <div style={{width:"100%"}} className="thumbInner">
                        {listHasValues(imageFiles) && (
                          <img style={{width:"100%"}} className="thumb-image" src={imageFiles[0].preview} />
                        )}
                      </div>
                    </div>
                  </div>
                </Box>

                <InputLabel className={Styles.label}>Categoria</InputLabel>
                <Select 
                  className={Styles.inputs}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={form.category}
                  label="category"
                  onChange={(e) => categoryChange(e)}
                >
                  <MenuItem value={"News"}>Noticias</MenuItem>
                  <MenuItem value={"Projects"}>Proyectos</MenuItem>
                  <MenuItem value={"Curses"}>Cursos</MenuItem>
                </Select>
                <ErrorMessage
                  component={() => (
                    <Alert style={{width:"95%"}} severity="warning">{errors.category}</Alert>
                  )}
                  name="category"
                />


                <Button 
                  className="submit-btn"
                  type="submit"
                  variant="contained">
                  Send
                </Button>
            
            </Form>
          </Card>
        );
      }}
      </Formik>
    </div>
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