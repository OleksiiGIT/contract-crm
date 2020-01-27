import React from 'react'
import Button from "@material-ui/core/Button";
import CloudUploadIcon  from '@material-ui/icons/CloudUpload';
import AddIcon  from '@material-ui/icons/Add';
import DeleteIcon  from '@material-ui/icons/Delete';
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import IconButton from "@material-ui/core/IconButton";

const FileUpload = () => {
    return (
        <div className="UploadFiles">
            <div className="UploadFileItem">
                <Button
                    variant="contained"
                    color="default"
                    startIcon={<CloudUploadIcon />}
                >
                    Загрузить
                </Button>
                <Typography variant="h6" component="h2">
                    Название файла.doc
                    <IconButton aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </Typography>
            </div>
            <div className="UploadFileItem">
                <Button
                    variant="contained"
                    color="default"
                    startIcon={<CloudUploadIcon />}
                >
                    Загрузить
                </Button>
                <Typography variant="h6" component="h2">
                    Название файла.pdf
                    <IconButton aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </Typography>
            </div>
            <div className="UploadFileItem">
                <Button
                    variant="contained"
                    color="default"
                    startIcon={<CloudUploadIcon />}
                >
                    Загрузить
                </Button>
                <Typography variant="h6" component="h2">
                    Название файла.doc
                    <IconButton aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </Typography>
            </div>
            <div className="moreUpload">
                <Fab aria-label="add" variant="extended">
                    <AddIcon />
                    Добавить поле
                </Fab>
            </div>
        </div>
    )
};

export default FileUpload;