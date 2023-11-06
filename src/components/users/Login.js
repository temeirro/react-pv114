import { Input, FormControl, InputLabel, FormHelperText } from "@mui/material";
import { useForm } from "react-hook-form";
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';

function Login() {
    const { register, handleSubmit } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    });
    const onSubmit = data => console.log(data);

    return (
        <form  style={{width:"80vw",margin: "10 auto"}} onSubmit={handleSubmit(onSubmit)}>
            <Stack>
                <FormControl>
                    <InputLabel htmlFor="email">Email address</InputLabel>
                    <Input {...register("email")} id="email" aria-describedby="email-helper-text" />
                    <FormHelperText id="email-helper-text">We'll never share your email.</FormHelperText>
                </FormControl>

                {/* <Divider /> */}

                <FormControl>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input {...register("password")}  type="password" id="password" aria-describedby="password-helper-text" />
                    <FormHelperText id="password-helper-text">We'll never share your password.</FormHelperText>
                </FormControl>
                {/* <Divider /> */}
                <FormControl>
                    <Button type="submit" variant="contained">Login</Button>
                    {/* <Input type="submit" /> */}

                </FormControl>
            </Stack>
        </form>)

}

export default Login;