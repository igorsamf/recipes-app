import React, { useContext } from 'react';
import MyRecipesContext from '../context/recipesContext/MyRecipesContext';

function FilterFoodButtons() {
  const { foodsFilters, foodFiltered, setFoodFiltered } = useContext(MyRecipesContext);

  const selectFilter = async ({ target }) => {
    const { id } = target;
    const END_POINT = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`;
    const TWELVE = 12;
    const { meals } = await fetch(END_POINT).then((response) => response.json());
    setFoodFiltered({
      ...foodFiltered,
      foodList: meals.filter((_food, index) => index < TWELVE),
      toggle: !foodFiltered.toggle,
    });
  };

  return (
    <div className="filters-buttons">
      {
        foodsFilters.map(({ strCategory }) => (
          <button
            key={ strCategory }
            type="button"
            data-testid={ `${strCategory}-category-filter` }
            id={ strCategory }
            onClick={ selectFilter }
          >
            { strCategory }
          </button>
        ))
      }
    </div>
  );
}

export default FilterFoodButtons;
