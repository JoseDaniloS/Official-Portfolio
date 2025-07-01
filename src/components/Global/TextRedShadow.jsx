export default function TextRedShadow({children, className}){
    return(
        <span className={`${className} text-white italic text-shadow-neon-red text-shadow-lg`}>{children}</span>
    )
}