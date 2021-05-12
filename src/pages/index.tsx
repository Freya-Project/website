import Header from "../components/header";
import NavigationHeader from "../components/navigationHeader";
import { MainContainer, Separator } from "../styles";

function Home(){
    return (<MainContainer>
        <Header/>
        <Separator height={48}/>
        <NavigationHeader/>
        <Separator height={124}/>
    </MainContainer>);
}

export default Home;
