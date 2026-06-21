
import { Input } from "./ui/input";
import { Button } from "./ui/button";

// import "styles/globals.css";
// import "./index.css";
export function Form(){
    return <div className="pd-2">
       <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      AI interview kickstart
    </h2>
    <br />
     <Input placeholder="Linkedin URL"/>
     <br /> <br />
     <Input placeholder="Github URL"/>
     <br /> 
     <br />
     <div className="flex justify-center cursor-pointer">
      <Button>Start Interview</Button>
     </div>
    
    </div>
  
}