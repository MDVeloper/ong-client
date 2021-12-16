import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { postArticle, putArticles } from "../../Store/Actions/actionArticles";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import { Button, Box } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Alert } from "@mui/material";
import { useDropzone } from "react-dropzone";
import { actionRefreshArticles } from "../../Store/Actions/actionRefreshArticles";
import Styles from "./Formulario.module.css";
import jwt_decode from "jwt-decode";
import Loading from "../Loading/Loading";

export const listHasValues = (list) => list.length > 0;
export const isEmptyList = (list) => list.length === 0;

export const dropzoneConfig = {
  multipleFiles: false,
  maxFiles: 1,
  validImages: "image/jpeg, image/png",
};

const { multipleFiles, maxFiles, validImages } = dropzoneConfig;

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  margin: "auto",
  width: "auto",
  height: 60,
  padding: 4,
  boxSizing: "border-box",
};

export default function Formulario({ history }) {
  let { id } = useParams();

  const dispatch = useDispatch();

  const result = useSelector((state) => state.articles.articles);

  const [form, setForm] = useState({
    id: id,
    title: "",
    img: "",
    description: "",
    category: "",
    status: "",
    voteCount: 0,
  });


  const [imageFiles, setImageFiles] = useState([]);
  const [base64ImageFile, setBase64ImageFile] = useState("");
  const [imageError, setImageError] = useState(false);
  const [userid, setuserid] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [sendForm, setSendForm] = useState(false);

  if (!localStorage.getItem("token")) {
    window.location.href = "/login";
  }

  if (localStorage.getItem("token") && userid === "") {
    const data = localStorage.getItem("token");
    setuserid(jwt_decode(data));
    if (jwt_decode(data).privilege !== "Admin") {
      window.location.href = "/";
    }
    if (jwt_decode(data).privilege === "Admin") {
      setIsLoading(false);
    }
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
      })
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

  const statusChange = (e) => {
    setForm({ ...form, status: e.target.value });
  };

  function handleSubmit(e) {
    console.log(form);
    !id 
      ? dispatch(postArticle(form, (form.img = base64ImageFile)))
      : dispatch(putArticles(form, (form.img = base64ImageFile)));
    // id !== true ? dispatch(postArticle(form)) : dispatch(putArticles(form))
    setSendForm(true);

    setTimeout(() => {
      dispatch(actionRefreshArticles());
      setSendForm(false);
    }, 2000);
  }

  return (
    <div className={Styles.container}>
      <Formik
        initialValues={{
          title: "",
          img: "",
          description: "",
          category: "",
          status: "",
        }}
        validate={(values) => {
          let errors = {};

          //Name
          if (form.title === "") {
            errors.title = "Requerido";
          }

          //Description
          if (form.description === "" || form.description.length < 100) {
            errors.description =
              "Ingrese descripcion con mas de 200 caracteres";
          }

          //Category
          if (form.category === "") {
            errors.category = "Requerido";
          }

          //Img
          if (imageFiles.length === 0) {
            errors.img = "Requerido";
          }

          // Status project
          if (form.category === "Projects") {
            if (form.status === "") {
              errors.status = "Requerido";
            }
          }

          return errors;
        }}
        onSubmit={(values, errors) => {
          handleSubmit(values);
        }}
      >
        {({ errors, touched }) => {
          return (
            <>
              {isLoading === true ? (
                <Loading />
              ) : (
                <Card className={Styles.CardContainer}>
                  {id ? <h1>MODIFICAR ARTICULO</h1> : <h1>CREAR ARTICULO</h1>}
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
                        <Alert style={{ width: "95%" }} severity="warning">
                          {errors.title}
                        </Alert>
                      )}
                      name="title"
                    />

                    <InputLabel className={Styles.label}>
                      Descripcion
                    </InputLabel>
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
                        <Alert style={{ width: "95%" }} severity="warning">
                          {errors.description}
                        </Alert>
                      )}
                      name="description"
                    />

                    <InputLabel className={Styles.label}>Imagen</InputLabel>
                    <Box
                      className={Styles.inputs}
                      component="div"
                      {...getRootProps()}
                    >
                      <input {...getInputProps()} />
                      <p>
                        Arrastra una imagen o haz click aqui para agregarla (
                        .png o .jpg )
                      </p>
                      <div className="thumbs-container">
                        <div className="thumb">
                          <div style={{ width: "100%" }} className="thumbInner">
                            {listHasValues(imageFiles) && (
                              <img
                                style={{ width: "100%" }}
                                className="thumb-image"
                                src={imageFiles[0].preview}
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    </Box>
                    <ErrorMessage
                      component={() => (
                        <Alert style={{ width: "95%" }} severity="warning">
                          {errors.img}
                        </Alert>
                      )}
                      name="img"
                    />

                    <InputLabel className={Styles.label}>Categoria</InputLabel>
                    <Select
                      className={Styles.inputs}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={form.category}
                      onChange={(e) => categoryChange(e)}
                    >
                      <MenuItem value={"News"}>Noticias</MenuItem>
                      <MenuItem value={"Projects"}>Proyectos</MenuItem>
                      <MenuItem value={"Course"}>Cursos</MenuItem>
                    </Select>
                    <ErrorMessage
                      component={() => (
                        <Alert style={{ width: "95%" }} severity="warning">
                          {errors.category}
                        </Alert>
                      )}
                      name="category"
                    />

                    {form.category === "Projects" && (
                      <>
                        <InputLabel className={Styles.label}>Estado</InputLabel>
                        <Select
                          className={Styles.inputs}
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={form.status}
                          onChange={statusChange}
                        >
                          <MenuItem value={"Pause"}>Pausado</MenuItem>
                          <MenuItem value={"InProgress"}>En proceso</MenuItem>
                          <MenuItem value={"Approved"}>Aprobado</MenuItem>
                        </Select>
                        <ErrorMessage
                          component={() => (
                            <Alert style={{ width: "95%" }} severity="warning">
                              {errors.status}
                            </Alert>
                          )}
                          name="status"
                        />
                      </>
                    )}

                    <Button
                      disabled={sendForm ? true : false}
                      className="submit-btn"
                      type="submit"
                      variant="contained"
                    >
                      Send
                    </Button>
                    {sendForm && (
                      <Alert style={{ width: "95%" }} severity="success">
                        Creado exitosamente
                      </Alert>
                    )}
                  </Form>
                </Card>
              )}
            </>
          );
        }}
      </Formik>
    </div>
  );
}
