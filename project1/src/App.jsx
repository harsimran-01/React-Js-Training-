
// import pic1 from './assets/pic1.jpg'
// import pic2 from './assets/pic2.jpg'
// import pic3 from './assets/pic3.jpg'
// import pic4 from './assets/pic4.jpg'
// import pic5 from './assets/pic5.jpg'
// import pic6 from './assets/pic6.jpg'

import AdminPanel from './components/AdminPanel'
import LoginForm from './components/LoginForm'
import Person from './components/Person'
import Product from './components/Product'


function App() {
  // const admin = "Sagar"
  // const foodList = [
  //   { id: 1, food: "Pizza", price: 149, image: pic1 },
  //   { id: 2, food: "Pasta", price: 80, image: pic2 },
  //   { id: 3, food: "Maggie", price: 90, image: pic3 },
  //   { id: 4, food: "Burger", price: 30, image: pic4 },
  //   { id: 5, food: "Cake", price: 200, image: pic5 },
  //   { id: 6, food: "Fries", price: 120, image: pic6 },
  // ]
  // // console.log(foodList)
  // console.log("Less Than 150")
  // const newProducts = foodList.filter(item=>item.price<150)
  // console.log(newProducts)

  // const isLogin = false

  // var content = ''

  // if(isLogin){
  //   content=<AdminPanel/>
  // }else{
  //   content=<LoginForm/>
  // }

  // const firstName = "Harsimran"
  // const lastName = "Kaur"
  // const email = "harsimrankaur@gmail.com"

  const userData = {
    firstName: "Harsimran",
    lastName: "Kaur",
    email: "harsimrankaur@gmail.com"
  }

  // const product_detail = {
  //   id:"1",
  //   item:"Pizza",
  //   item_unit:2,
  //   item_price:"$10"
  // }

   const products = [
    { id: "1", item: "Pizza", item_unit: 2, item_price: 10 },
    { id: "2", item: "Burger", item_unit: 3, item_price: 5 },
    { id: "3", item: "Pasta", item_unit: 1, item_price: 8 }
  ]

  let total = 0
  products.forEach(p=>{
    total+=p.item_unit*p.item_price
  })

  let final_total = total - total *0.1


  return (
    <div>

      {/* 19 SEP */}

      {/* {content} */}

      {/* ternary operator */}
      {/* {isLogin?<AdminPanel/>:<LoginForm/>} */}

      {/* And operator */}
      {/* {isLogin && <AdminPanel/>} */}

      {/* <Person firstName={firstName} lastName={lastName} email={email} /> */}

      <Person userData={userData}/>


      <h2>Product Details</h2>
      {/* <Product product_detail={product_detail}/> */}
      {products.map((p) => (
        <Product key={p.id} product_detail={p} />
      ))}


      <h2>Total (before discount): ${total}</h2>
      <h2>Total after 10% discount: ${final_total}</h2>

      {/* Basic */}

      {/* <h1 className="display-1">Display 1</h1>
      <h1 className="display-2">Display 2</h1>
      <h1 class="display-3">Display 3</h1>
      <h1 class="display-4">Display 4</h1>
      <h1 class="display-5">Display 5</h1>
      <h1 class="display-6">Display 6</h1> */}

      {/* <table className="table table-striped table-hover">
        <thead>
          <tr className="table-primary">
            <th>Food</th>
            <th>Price</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {
            foodList.map((fooditem)=>{
              return(
                <tr key={fooditem.id}>
                  <td className="table-success">{fooditem.food}</td>
                  <td className="table-success">{fooditem.price}</td>
                  <td className="table-success"><img src={fooditem.image} alt="images" /></td>

                </tr>
                
              )
            })
          } */}
      {/* {
            foodList
            .filter(item=>item.price<150)
            .map(fooditem =>{
              return(
                <tr key={fooditem.id}>
                  <td>{fooditem.food}</td>
                  <td>{fooditem.price}</td>
                </tr>
              )
            })
          } */}
      {/* </tbody>
      </table> */}

      {/* Basic */}

      {/* <div className='container'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa reprehenderit perferendis beatae nulla, repudiandae voluptatem eligendi veniam cupiditate adipisci distinctio quasi dolore totam praesentium fugiat temporibus odit pariatur ratione id.
        Nisi quibusdam mollitia neque in ipsum error, porro adipisci aliquam repellendus esse laborum debitis iure sapiente eos consectetur excepturi id rem ducimus hic vero at voluptate! A blanditiis tempore ipsa?</p></div>
      <div className='container-fluid'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque iusto odit omnis debitis ut dolor nobis quidem ratione repellat ducimus iste optio id deserunt corrupti, totam quae enim blanditiis recusandae?
      Qui nulla accusantium laudantium tenetur quasi. Expedita eius rem itaque accusantium eveniet recusandae quasi molestias minima? Fugit, aspernatur esse, pariatur quos odio perferendis, inventore nemo voluptas ratione quisquam exercitationem ullam.</p></div> */}

      {/* <div className='container'>
        <div className='row'>
          <div className='col-lg-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit minima sint reprehenderit rerum id ullam cumque autem eos consequuntur velit numquam eaque, iusto dolor quae aperiam nisi officia, voluptate molestiae.</div>
          <div className='col-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit minima sint reprehenderit rerum id ullam cumque autem eos consequuntur velit numquam eaque, iusto dolor quae aperiam nisi officia, voluptate molestiae.</div>
          <div className='col-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit minima sint reprehenderit rerum id ullam cumque autem eos consequuntur velit numquam eaque, iusto dolor quae aperiam nisi officia, voluptate molestiae.</div>
          <div className='col-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit minima sint reprehenderit rerum id ullam cumque autem eos consequuntur velit numquam eaque, iusto dolor quae aperiam nisi officia, voluptate molestiae.</div>
        </div>
      </div> */}

      {/* HOMEWORK */}

      {/* <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='card p-2 m-2 text-center'>
              <img src={pic1} alt="img" width="150" height="200"/>
            </div>
            <div className='card-title'>
              <h1>Spaggetti</h1>
            </div>
            <div className='card-text'>
              <h3>$10</h3>
            </div>
        
          </div>
          <div className='col'>
            <div className='row'>
              <img src={pic2} alt="img" width="150" height="200"/>
            </div>
            <div className='row'>
              <h1>Fruit Salad</h1>
            </div>
            <div className='row'>
              <h3>$20</h3>
            </div>
          </div>
          <div className='col'>
            <div className='row'>
              <img src={pic3} alt="img" width="150" height="200"/>
            </div>
            <div className='row'>
              <h1>Burger</h1>
            </div>
            <div className='row'>
              <h3>$10</h3>
            </div>
          </div>
          <div className='col'>
            <div className='row'>
              <img src={pic4} alt="img" width="140" height="200"/>
            </div>
            <div className='row'>
              <h1>Soup</h1>
            </div>
            <div className='row'>
              <h3>$5</h3>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <div className='row'>
              <img src={pic1} alt="img" width="150" height="200"/>
            </div>
            <div className='row'>
              <h1>Spaggetti</h1>
            </div>
            <div className='row'>
              <h3>$10</h3>
            </div>
        
          </div>
          <div className='col'>
            <div className='row'>
              <img src={pic2} alt="img" width="150" height="200"/>
            </div>
            <div className='row'>
              <h1>Fruit Salad</h1>
            </div>
            <div className='row'>
              <h3>$20</h3>
            </div>
          </div>
          <div className='col'>
            <div className='row'>
              <img src={pic3} alt="img" width="150" height="200"/>
            </div>
            <div className='row'>
              <h1>Burger</h1>
            </div>
            <div className='row'>
              <h3>$10</h3>
            </div>
          </div>
          <div className='col'>
            <div className='row'>
              <img src={pic4} alt="img" width="140" height="200"/>
            </div>
            <div className='row'>
              <h1>Soup</h1>
            </div>
            <div className='row'>
              <h3>$5</h3>
            </div>
          </div>
        </div>
        
      </div> */}



    </div>
  )

}

export default App