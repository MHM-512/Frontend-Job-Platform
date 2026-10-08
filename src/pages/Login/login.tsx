import { Box, Button, FormHelperText, TextField, Typography } from "@mui/material"
import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools";
import { useAuth } from "../../app/providers/AuthContext";
import { blueGrey} from '@mui/material/colors';3
import { useNavigate } from "@tanstack/react-router";
type FormValues = {
    username: string;
    email: string;
    password: string;
}
export default function Login() {
    const navigate = useNavigate()
    const form = useForm<FormValues>({
        mode: 'onBlur',
        defaultValues: {
            username: '',
            email: '',
            password: '' ,
        }
    })
    const { register, control, handleSubmit, formState: { errors }, getValues } = form

    const { login } = useAuth();
    const onSubmit = (data: FormValues) => {
        login({
            username: data.username,
            email: data.email,
            password:data.password,
        });
        navigate({ to: "/profile" });
        console.log("Form submitted", data);
    };



    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box sx={{ marginTop: '25px', padding:'40px',bgcolor:blueGrey[300], borderRadius:7 }}>
                        <Typography sx={{display:'flex', justifyContent:"center", alignItems:'center', fontSize:'32px'}}> Login </Typography>
                        <Box sx={{ display: 'block'}}>
                            <TextField
                                sx={{ display: 'block', marginTop: '20px' }}
                                label='username'
                                type="text"
                                id="userbname"
                                {...register('username')}
                            />
                            <TextField
                                sx={{ display: 'block', marginTop: '20px' }}
                                label='email'
                                type="text"
                                id="email"
                                {...register('email',
                                    {
                                        required: "ایمیل الزامی است",
                                        // pattern: {
                                        //     value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                        //     message: "invalid format"
                                        // },
                                        validate: {
                                            notAdmin: (field) => {
                                                return (field !== "test@gmail.com" || "یک ایمیل دیگر وارد کنید");
                                            },
                                            notBlockListed: (field) => {
                                                return (!field.endsWith("baddomain.com") || "غیر قابل قبول");
                                            },
                                            emailAvailable: async (fieldValue) => {
                                                const response = await fetch(`https://jsonplaceholder.typicode.com/users?email=${fieldValue}`);
                                                const data = await response.json();
                                                return data.length === 0 || "ایمیل موجود است"
                                            },
                                        },

                                    }

                                )}
                            />
                            <FormHelperText > {errors.email?.message} </FormHelperText>
                            <TextField
                                sx={{ display: 'block', marginTop: '20px' }}
                                label='password'
                                type="text"
                                id="password"
                                {...register('password')}
                            />
                            <FormHelperText > {errors.password?.message} </FormHelperText>
                        </Box>
                        <Box sx={{display: 'flex', flexDirection:'column', justifyContent:'center' , alignItems:'center'}}>
                            <Button
                            sx={{ marginTop: '20px' , marginRight:'20px' }}
                            variant="contained"
                            type="submit"
                        >
                            submit
                        </Button>
                        </Box>

                    </Box>
                </Box>
            </form>
            <DevTool control={control} />
        </>
    )
}

// mhm@gmail.com 