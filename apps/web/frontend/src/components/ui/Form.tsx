
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";
import {toast} from "sonner";

// import "styles/globals.css";
// import "./index.css";
export function Form(){
    const [linkedin, setLinkedin] = useState("");
    const [github, setGithub] = useState("");
    function handleButton(){
        if(!linkedin || !github){
            toast("Please provide valid linkedin and github urls", {
          })
        }
    }
    return <div className="pd-2">
       <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      AI interview kickstart
    </h2>
    <br />
     <Input placeholder="Linkedin URL" onChange={(e) => setLinkedin(e.target.value)}/>
     <br /> <br />
     <Input placeholder="Github URL" onChange={(e) => setGithub(e.target.value)}/>
     <br /> 
     <br />
     <div className="flex justify-center cursor-pointer">
      <Button onClick={handleButton}>Start Interview</Button>
     </div>
    
    </div>
  
}