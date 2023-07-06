import React from 'react';
import PageBanner from "../Reusable Components/PageBanner";
import NavBar from "../Reusable Components/NavBar";
import ContentContainer from "../Reusable Components/ContentContainer";
import ImageTextRow from "../Reusable Components/ImageTextRow";
import notSureWhereToStart from "../../assets/not-sure-where-to-start-image.png"
import ActionBanner from "../Reusable Components/ActionBanner";
import Footer from "../Reusable Components/Footer";

const Packages = () => {
    return (
        <div>
            <NavBar/>
            <PageBanner title="Packages"/>
            <ContentContainer>
                <ImageTextRow image={notSureWhereToStart} title="Not Sure Where to Start?"
                              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut mollis enim. Fusce aliquam fringilla sapien, et viverra elit viverra ut. Etiam interdum iaculis nunc et faucibus. Vestibulum eu quam a nunc venenatis interdum venenatis. Pellentesque pulvinar odio nec arcu maximus vestibulum."
                              isImageOnTheLeft={false}
                />

                <div className="customer-container">
                    <h2>New Customers</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut mollis enim. Fusce aliquam
                        fringilla sapien, et viverra elit viverra ut. Etiam interdum iaculis nunc et faucibus.
                        Vestibulum eu quam a nunc venenatis interdum venenatis. Pellentesque pulvinar odio nec arcu
                        maximus vestibulum.</p>
                </div>

                <div className="customer-container">
                    <h2>Current Customers</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut mollis enim. Fusce aliquam
                        fringilla sapien, et viverra elit viverra ut. Etiam interdum iaculis nunc et faucibus.
                        Vestibulum eu quam a nunc venenatis interdum venenatis. Pellentesque pulvinar odio nec arcu
                        maximus vestibulum.</p>
                </div>

                <ActionBanner/>

            </ContentContainer>

            <Footer/>
        </div>
    );
};

export default Packages;