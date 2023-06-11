import { Helmet } from "react-helmet-async";
import useMenu from "../../../../hooks/useMenu";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";


const ClassesPage = () => {
    const categories = ['Anatomy Drawing', 'Still Life Drawing', 'Cartoon Drawing', 'Portrait Drawing', 'Figure Drawing', 'Experimental Drawing'];
    const {category} = useParams()
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();

    const anatomyDrawing = menu.filter((item) => item.category === "Anatomy Drawing");
    const stillLifeDrawing = menu.filter((item) => item.category === "Still Life Drawing");
    const cartoonDrawing = menu.filter((item) => item.category === "Cartoon Drawing");
    const portraitDrawing = menu.filter((item) => item.category === "Portrait Drawing");
    const figureDrawing = menu.filter((item) => item.category === "Figure Drawing");
    const experimentalDrawing = menu.filter((item) => item.category === "Experimental Drawing");


    return (
        <div>
             <Helmet>
                <title>ALL Class</title>
            </Helmet>
            <div  className="mt-10 text-center  font-bold rounded">
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Anatomy Drawing</Tab>
                    <Tab>Still Life Drawing</Tab>
                    <Tab>Cartoon Drawing</Tab>
                    <Tab>Portrait Drawing</Tab>
                    <Tab>Figure Drawing</Tab>
                    <Tab>Experimental Drawing</Tab>
                </TabList>
                <div className="mt-10">
                <TabPanel>
                   <OrderTab items={anatomyDrawing}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={stillLifeDrawing}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={cartoonDrawing}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={portraitDrawing}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={figureDrawing}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={experimentalDrawing}></OrderTab>
                </TabPanel>
                </div>
            </Tabs>
            </div>
        </div>
    );
};

export default ClassesPage;