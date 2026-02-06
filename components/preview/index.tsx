
interface PreviewProps {
    className?: string;
    title: string;
    date: string;
    body: string;
}

const Preview: React.FC<PreviewProps> = ({ 
    className,
    title,
    date,
    body

    }) => {
    return (
        <div className={`flex flex-col ${className}`}>
            <h1 className="font-montserrat text-xl mb-1 font-semibold">{title}</h1>
            <h3 className="font-montserrat text-xs mb-5">{date}</h3>
            <p className="opacity-50">{body}</p>
        </div>
    );
};

export default Preview;