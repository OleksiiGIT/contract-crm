import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddFormFields from "./AddFormFields";
import { getTomorrow } from '../functions'
import SnackbarMessage from "./SnackbarMessage";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ['Заполните поля', 'Загрузите документы', 'Создать договор'];
}

export default function AddStepper() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [contractData, setContractData] = React.useState({
        contrAgent1: null,
        contrAgent2: null,
        type: null,
        startDate: new Date(),
        endDate: getTomorrow(),
    });
    const [error, setError] = React.useState({});

    const steps = getSteps();

    const handleNext = () => {
        if (!isInvalid()) {
            setError( checkState() )
        } else {
            setError(null )
            setActiveStep(prevActiveStep => prevActiveStep + 1)
        }
    };

    const isInvalid = () => {
        return Object.keys(contractData).every(key => contractData[key])
    }

    const checkState = () => {
        return Object.keys(contractData).reduce((final,item) => ({
                ...final,
                [item]: contractData[item] ? false : true
            }), {});
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const handleSetFormData = (info, name) => {
        switch (name) {
            case 'contrAgent1':
                setContractData({
                    ...contractData,
                    contrAgent1: info
                })
                break;
            case 'contrAgent2':
                setContractData({
                    ...contractData,
                    contrAgent2: info
                })
                break;
            case 'type':
                setContractData({
                    ...contractData,
                    type: info
                })
                break;
            case 'startDate':
                setContractData({
                    ...contractData,
                    startDate: info
                })
                break;
            case 'endDate':
                setContractData({
                    ...contractData,
                    endDate: info
                })
                break;
            default:
                setContractData({
                    contrAgent1: null,
                    contrAgent2: null,
                    type: null
                })
        }
    }

    const getStepContent = (stepIndex) => {
        switch (stepIndex) {
            case 0:
                return <AddFormFields
                    onChange={handleSetFormData}
                    errors={error}
                />;
            case 1:
                return 'What is an ad group anyways?';
            case 2:
                return 'This is the bit I really care about!';
            default:
                return 'Unknown stepIndex';
        }
    };

    const handleErrorsClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setError(null);
    };

    const showAlert = () => {
        for (let key in error) {
            return true;
        }
        return false;
    }

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map(label => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>All steps completed</Typography>
                        <Button onClick={handleReset}>Сброс</Button>
                    </div>
                ) : (
                    <div>
                        {getStepContent(activeStep)}
                        <div className="formContractAddNav">
                            <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                className={classes.backButton}
                            >
                                Назад
                            </Button>
                            <Button variant="contained" color="primary" onClick={handleNext}>
                                {activeStep === steps.length - 1 ? 'Создать новый договор' : 'Далее'}
                            </Button>
                        </div>
                    </div>
                )}
                <SnackbarMessage
                    open={showAlert()}
                    onClose={handleErrorsClose}
                    type="error"
                >Вы заполнили не все поля!</SnackbarMessage>
            </div>
        </div>
    );
}