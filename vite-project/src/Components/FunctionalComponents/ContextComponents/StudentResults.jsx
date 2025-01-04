import {useContext} from 'react';
import { ThemeProvider } from '../UseContext';

var StudentResults = () =>{
    var result=useContext(ThemeProvider);
    return(
       <section>
        <h1>Your GPA result is {result.sgpa} and CGPA result is {result.cgpa}</h1>
        
       </section>
    )
    }
    export default StudentResults;