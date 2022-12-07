import React from "react";
import "../css/Home.css";
import Product from "./Product";

const Home = () => {
   return (
      <div className="home">
         {/* <img
            src="https://techplugged.com/wp-content/uploads/2021/12/prime-video.jpg"
            alt=""
         /> */}
         <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonSmallBusinessDay/Jupiter21/Spotlight/eng_pc11.jpg"
            alt=""
         />
         <div className="home__row">
            <Product
               id={"1"}
               title={"Killing Hemingway Killing Hemingway Killing Hemingway "}
               image={
                  "https://allotrope.in/wp-content/uploads/2021/08/2016_02_12_00_05_05_910db405-6bd4-4a5d-bce7-c2e3135dc5e6_449070_WAntoneta_55908c_killing.png"
               }
               price={343}
               rating={5}
            />
            <Product
               id={"2"}
               title={"Killing Hemingway Killing Hemingway Killing Hemingway "}
               image={
                  "https://allotrope.in/wp-content/uploads/2021/08/2016_02_12_00_05_05_910db405-6bd4-4a5d-bce7-c2e3135dc5e6_449070_WAntoneta_55908c_killing.png"
               }
               price={343}
               rating={5}
            />
         </div>
         <div className="home__row">
            <Product
               id={"3"}
               title={"Killing Hemingway Killing Hemingway Killing Hemingway "}
               image={
                  "https://allotrope.in/wp-content/uploads/2021/08/2016_02_12_00_05_05_910db405-6bd4-4a5d-bce7-c2e3135dc5e6_449070_WAntoneta_55908c_killing.png"
               }
               price={343}
               rating={5}
            />
            <Product
               id={"4"}
               title={"Killing Hemingway Killing Hemingway Killing Hemingway "}
               image={
                  "https://allotrope.in/wp-content/uploads/2021/08/2016_02_12_00_05_05_910db405-6bd4-4a5d-bce7-c2e3135dc5e6_449070_WAntoneta_55908c_killing.png"
               }
               price={343}
               rating={5}
            />
            <Product
               id={"5"}
               title={"Killing Hemingway Killing Hemingway Killing Hemingway "}
               image={
                  "https://allotrope.in/wp-content/uploads/2021/08/2016_02_12_00_05_05_910db405-6bd4-4a5d-bce7-c2e3135dc5e6_449070_WAntoneta_55908c_killing.png"
               }
               price={343}
               rating={5}
            />
         </div>
      </div>
   );
};

export default Home;
