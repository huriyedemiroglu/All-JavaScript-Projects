import MenuItem from "../MenuItem"
import foods from "../FoodList"

function Menu() {
    return (
        <main className="menu">
            <h2 className="menu-title">Menu</h2>
            <div className="menu-container">
                {foods.map(food => (
                    <MenuItem key={food.id} image={food.image} definition={food.definition} />
                ))}
            </div>
        </main>
    )
}

export default Menu