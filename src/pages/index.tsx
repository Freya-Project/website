import Header from "../components/header";
import Head from "next/head";
import { MainContainer, Separator } from "../styles";

function Home(){
    return (<>
        <Head>
            <title>FreyaBot: Home</title>
        </Head>
        <MainContainer>
            <Header/>
            <Separator height={163}/>
        </MainContainer>
    </>);
}

export default Home;
