export default ({ title, children }) => {
    return <div className="flex p-8 gap-2 rounded-md flex-col box-shadow-one bg-white">
        <h4 className="text-xl font-semibold">{title}</h4>
        {children}
    </div>
}