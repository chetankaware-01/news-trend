
import React from "react";
import { useState , useEffect} from "react";
import PropTypes from 'prop-types'
import News from "./news";

export default function Fetchnews(props) {

    // let newslist=[{
    //     status: "ok",
    //     totalResults: 34,
    //     articles: [
    //       {
          
    //         source: {
    //           id: "the-verge",
    //           name: "The Verge"
    //         },
    //         author: "Sean Hollister",
    //         title: "Leak: Basically every spec for Samsung's Z Fold 6 and Z Flip 6 - The Verge",
    //         description: "Samsung’s full specs for the Z Fold 6 and Z Flip 6 have appeared to leak thanks to information shared by leaker Evan Blass.",
    //         url: "https://www.theverge.com/2024/7/3/24191966/samsung-galaxy-z-fold-flip-6-spec-leak",
    //         urlToImage: "https://cdn.vox-cdn.com/thumbor/f2CNhMyf7goXYYGDuvxt8xjEvnE=/0x0:2076x1450/1200x628/filters:focal(1038x725:1039x726)/cdn.vox-cdn.com/uploads/chorus_asset/file/25517537/Screenshot_2024_07_03_at_5.47.10_PM.png",
    //         publishedAt: "2024-07-04T01:16:00Z",
    //         content: "Leak: Basically every spec for Samsungs Z Fold 6 and Z Flip 6\r\nLeak: Basically every spec for Samsungs Z Fold 6 and Z Flip 6\r\n / Leaker Evan Blass shared what are almost certainly Samsungs full spec … [+2987 chars]"
    //       },
    //       {
    //         source: {
    //           id: "the-verge",
    //           name: "The Verge"
    //         },
    //         author: "Jay Peters",
    //         title: "The FTC's ban against noncompete agreements may be under threat - The Verge",
    //         description: "A federal judge has partially blocked the Federal Trade Commission’s impending ban on noncompete agreements from going into effect.",
    //         url: "https://www.theverge.com/2024/7/3/24191946/ftc-noncompete-ban-judge-preliminary-injunction",
    //         urlToImage: "https://cdn.vox-cdn.com/thumbor/sD_MeWc1Xx16IHwfMnUb-o4M4hA=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/25263345/STK432_Government_A_CVirginia.jpg",
    //         publishedAt: "2024-07-04T00:50:00Z",
    //         content: "The FTCs ban against noncompete agreements may be under threat\r\nThe FTCs ban against noncompete agreements may be under threat\r\n / A federal judge issued a preliminary injunction against the ban.\r\nBy… [+2060 chars]"
    //       },
    //       {
    //         source: {
    //           id: "the-washington-post",
    //           name: "The Washington Post"
    //         },
    //         author: "Alex Horton",
    //         title: "Civil War troops receive Medal of Honor for Great Locomotive Chase - The Washington Post",
    //         description: "President Biden presented posthumous Medals of Honor to Civil War troops Philip Shadrach and George Wilson for a mission known as the Great Locomotive Chase.",
    //         url: "https://www.washingtonpost.com/national-security/2024/07/03/biden-civil-war-medal-of-honor/",
    //         urlToImage: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/UYGVC3DH5MSWISX4AO3KYV5SQM_size-normalized.jpg&w=1440",
    //         publishedAt: "2024-07-04T00:34:38Z",
    //         content: "Two U.S. soldiers, executed 162 years ago for their role in a daring Civil War mission to hijack a locomotive and sabotage a rail line vital to the Confederacy, were recognized Wednesday with the nat… [+7266 chars]"
    //       },
    //       {
    //         source: {
    //           id: "9090",
    //           name: "BBC News"
    //         },
    //         author: "bbc",
    //         title: "Hurricane Beryl: Deadly storm roars towards Jamaica - BBC.com",
    //         description: "At least seven people die as a result of the powerful hurricane raging across the Caribbean.",
    //         url: "https://www.bbc.com/news/articles/cv2gm528k4mo",
    //         urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/a38d/live/283cca20-39ae-11ef-82d0-0f04f643ba16.jpg",
    //         publishedAt: "2024-07-04T00:15:51Z",
    //         content: "By Vanessa Buschschlüter, BBC News\r\nA man walks in a flooded street in Kingston\r\nJamaica is bracing for a powerful hurricane as it roars towards the Caribbean island.\r\nBeryl - a category four storm w… [+3770 chars]"
    //       },
    //       {
    //         source: {
    //           id: "espn",
    //           name: "ESPN"
    //         },
    //         author: "Jesse Rogers",
    //         title: "Three Phillies, Judge, Soto, Ohtani among MLB All-Star starters - ESPN",
    //         description: "Bryce Harper, Trea Turner and Alec Bohm were among the starters named for the Midsummer Classic, joined by expected names including Aaron Judge, Juan Soto and Shohei Ohtani.",
    //         url: "https://www.espn.com/mlb/story/_/id/40491206/three-phillies-judge-soto-ohtani-mlb-all-star-starters",
    //         urlToImage: "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0704%2Fr1354164_2_1296x729_16%2D9.jpg",
    //         publishedAt: "2024-07-03T23:52:00Z",
    //         content: "The Philadelphia Phillies are sending three infielders to the MLB All-Star Game later this month, as Bryce Harper, Trea Turner and Alec Bohm were among the starters named for the Midsummer Classic on… [+2906 chars]"
    //       },
    //       {
    //         source: {
    //           id: "reuters",
    //           name: "Reuters"
    //         },
    //         author: "Leah Douglas",
    //         title: "Bird flu human case is reported in Colorado - Reuters.com",
    //         description: "Public health officials in Colorado on Wednesday announced an adult man had tested positive for avian flu after reporting mild symptoms, including conjunctivitis, or pink eye.",
    //         url: "https://www.reuters.com/world/americas/colorado-reports-human-case-bird-flu-2024-07-03/",
    //         urlToImage: "https://www.reuters.com/resizer/v2/PP6QMYTLJZJE3EE465LKWXIPJU.jpg?auth=dd0b439e8ffce8dce05100a4c27743be90577124a829402df1c3143d35b5de7b&height=1005&width=1920&quality=80&smart=true",
    //         publishedAt: "2024-07-03T23:49:00Z",
    //         content: "The Philadelphia Phillies are sending three infielders to the MLB All-Star Game later this month, as Bryce Harper, Trea Turner and Alec Bohm were among the starters named for the Midsummer Classic o"

    //       }
    //     ]
    //   }]
    
    const[articles, setArticles]=useState([]);
    const[page, setPage] = useState(1);
    const[totalResult, setTotalResult]=useState(0);


    const getnews = async() => {
        // const NewsUrl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${apiKey}&page=${props.pageno}&pagesize=${props.pageSize}`;
        const NewsUrl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=general&apiKey=${props.apiKey}&pageSize=10&page=2`;
        let getdata =await fetch(NewsUrl);
        let parsedData = await getdata.json();
        
        setArticles(parsedData.articles);
        setTotalResult(parsedData.totalResults);
        // console.log(parsedData);
        // console.log(totalResult);
        console.log(props.pageSize);
        
    }
  
    //sample use through array of news list
    // const getnews =  () => {
    //     setArticles(newslist[0].articles);
    //     setTotalResult(newslist.totalResults);
    
    // }
    useEffect(()=>{
        getnews();
    },[]);
    
    // console.log(articles);
    // console.log(totalResult);
    


    return (
        
        <div className="row g-4 mt-4">
           {articles && articles.map((element)=> {
            return(<div className="col-md-4 p-3" key={element.url}>
                <News title={element.title ? element.title : " "} description={element.description ? element.description : ""} imageUrl={element.urlToImage ? element.urlToImage :""} newsUrl={element.url?element.url:""} author={element.author ?element.author:""} date={element.publishedAt?(element.publishedAt).substring(0,10):""} source={element.source.name?element.source.name:""} />
                </div>)
            
           })}


        </div>
        
    );

   

}
Fetchnews.defaultProps = {
    country: 'in',
    // pageSize: '20',
    category: 'general',
    
}

Fetchnews.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
   
    category: PropTypes.string,
}
