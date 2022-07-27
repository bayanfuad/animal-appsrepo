import React from "react"; 
import Hornbeasts from "./hornedBeasts";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Find from "./find";

// let arr = require('./data.json'); 
   
// const arr= [{
//     "_id": 1,
//     "image_url": "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
//     "title": "UniWhal",
//     "description": "A unicorn and a narwhal nuzzling their horns",
//     "keyword": "narwhal",
//     "horns": 1
//   },

//   {
//     "_id": 2,
//     "image_url": "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80",
//     "title": "Rhino Family",
//     "description": "Parent rhino with two babies",
//     "keyword": "rhino",
//     "horns": 2
//   },

//   {
//     "_id": 3,
//     "image_url": "https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg",
//     "title": "Unicorn Head",
//     "description": "Someone wearing a very silly unicorn head mask",
//     "keyword": "unicorn",
//     "horns": 1
// }]

// displayModal={this.props.displayModal}

// class Main extends React.Component {

//     filteredBeasts() {
//         if (Number(this.props.dataSelected) === 0) {
//             return this.props.data.map((item, idx) =>



//             <Col key={idx}>
//            <Hornbeasts  imgUrl={item.image_url} title={item.title} description={item.description}  displayModal={this.props.displayModal} data={item}/>
//                               </Col>

//             )
//         }
//         else {
//             return this.props.data.filter(item =>
//                 (item.horns === Number(this.props.dataSelected))

//             ).map((item, idx) => (
//                 <Col key={idx}>
//          <Hornbeasts  imgUrl={item.image_url} title={item.title} description={item.description}  displayModal={this.props.displayModal} data={item}/>
//                                    </Col>
//             )
//             )
//         }
//     }

//     render() {
//         return (
//             <>
//                 <Find horns={this.props.filtered} />
//                 <Row xs={2} md={3} className="g-4">
//                         {this.filteredBeasts()}
//                     </Row>
                
//             </>
//         )
//     }
// }
// export default Main;









// export default Main;








class Main extends React.Component {
      render() {
        
        return (
            <Row xs={2} md={3} className="g-4">
        {this.props.allBeast.map((item,idx) => 
         
            
              
                    <Col key={idx}>
                    <Hornbeasts  imgUrl={item.image_url} title={item.title} description={item.description}  displayModal={this.props.displayModal} data={item}/>
                    </Col>
             
            )
        }
            </Row>
        )
        }
    
      }
    export default Main;

