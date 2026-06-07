const FilterBar = ({ soloConStock, onChange }) => {
    return(
        <section className="filter-bar">
            <label className="filter-label">
                <input 
                    type="checkbox"
                    checked={soloConStock}
                    onChange={(e) => onChange(e.target.checked)}
                />
                Mostrar solo productos con stock disponible
            </label>
        </section>
    )
}

export default FilterBar;