export default function FormularioContacto(){
     const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const response = await fetch(
            "https://formspree.io/f/xgvgggkj",
            {
                method: "POST",
                body: formData,
                headers: {
                Accept: "application/json",
                },
            }
        );

        if (response.ok) {
            alert("Mensaje enviado correctamente ✅");
            e.target.reset();
        } else {
            alert("Error al enviar ❌");
        }
    };

    return(
        <form onSubmit={handleSubmit}  className="h-full w-full flex flex-col justify-around gap-10">
            <div className="flex flex-col w-full">
                <span className="font-semibold text-[#2076E0]">Nombre</span>
                <input type="text" placeholder="Ingrese su nombre..." required className="px-5 py-3 bg-[#221266] outline-none shadow-[8px_8px_0_#000] border border-black rounded text-[#aeacac]"/> 
            </div>
            <div className="flex flex-col">
                <span className="font-semibold text-[#2076E0]">Email</span>
                <input type="text" placeholder="ej: juan_rr@hotmail.com" required  className="px-5 py-3 bg-[#221266] shadow-[8px_8px_0_#000] border border-black rounded text-[#aeacac]"/>
            </div>
            <div className="flex flex-col">
                <span className="font-semibold text-[#2076E0]">Mensaje</span>
                <textarea name="" id="" placeholder="Escriba su mensaje..." className="px-5 py-3 bg-[#221266] outline-none shadow-[8px_8px_0_#000] border border-black rounded text-[#aeacac]"></textarea>
            </div>
            <button type="submit" className="cursor-pointer
                text-xl
                px-7 py-3
                bg-[linear-gradient(to_top_right,#121966,#66125B)]
                font-bold
                border-4 border-black
                shadow-[8px_8px_0_#000]
                text-[#ad9d52]
                rounded
            ">Enviar
            </button>
            </form>
    )
}