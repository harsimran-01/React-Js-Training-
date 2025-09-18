import pic1 from './assets/pic1.jpg'
import pic2 from './assets/pic2.jpg'
import pic3 from './assets/pic3.jpg'
import pic4 from './assets/pic4.jpg'
import pic5 from './assets/pic5.jpg'
import pic6 from './assets/pic6.jpg'
function App() {
  const admin = "Sagar"
  const foodList = [
    { id: 1, food: "Pizza", price: 149,image:pic1},
    { id: 2, food: "Pasta", price: 80 ,image:pic2},
    { id: 3, food: "Maggie", price: 90 ,image:pic3},
    { id: 4, food: "Burger", price: 30 ,image:pic4},
    { id: 5, food: "Cake", price: 200 ,image:pic5},
    { id: 6, food: "Fries", price: 120 ,image:pic6},
  ]
  // // console.log(foodList)
  // console.log("Less Than 150")
  // const newProducts = foodList.filter(item=>item.price<150)
  // console.log(newProducts)
  return (
    <div>
      {/* <h1 className="display-1">Display 1</h1>
      <h1 className="display-2">Display 2</h1>
      <h1 class="display-3">Display 3</h1>
      <h1 class="display-4">Display 4</h1>
      <h1 class="display-5">Display 5</h1>
      <h1 class="display-6">Display 6</h1> */}

      <table className="table table-striped table-hover">
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
          }
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
        </tbody>
      </table>



    </div>
  )

}

export default App