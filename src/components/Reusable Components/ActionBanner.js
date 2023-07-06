import React from 'react';
import ContentContainer from "./ContentContainer";
import "./ActionBanner.css"

const ActionBanner = ({marginTop, marginBottom}) => {
    return (
        <ContentContainer span={10} topMargin={marginTop ? marginTop : "8rem"}
                          bottomMargin={marginBottom ? marginBottom : "8rem"}>
            <div className="action-banner">

                <h2 className="action-banner-title">Let us take your business to new heights.</h2>


                <p className="action-banner-body">
                    Ready to transform your website and marketing campaigns into powerful tools that drive
                    growth, we're here to make it happen.
                </p>

                <button className="action-banner-button">
                    Free Consultation
                </button>
            </div>
        </ContentContainer>
    );
};

export default ActionBanner;