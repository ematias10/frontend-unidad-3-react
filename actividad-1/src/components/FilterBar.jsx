const FilterBar = ({}) => {
    return(
        <section className="filter-bar">
            <label className="filter-label">
                <input 
                    type="checkbox"
                    checked={false}
                />
                Mostrar solo productos con stock disponible
            </label>
        </section>
    )
}

export default FilterBar;