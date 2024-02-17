import {AppButton, AppText} from "./app/ui/atoms";


export default function App() {
  return <AppButton title={"Login"} onPress={()=>{console.log('tapped')}}/>
}