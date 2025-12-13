const HotWheels = () => {
  return (
    <>
        <nav className='flex justify-between px-4 py-4 items-center'>
            <h1 className='font-bold text-3xl'>HOT WHEELS 🔥</h1>
            <aside className='flex gap-6'>
                <a href='#' className='hover:font-medium'>Home</a>
                <a href='#' className='hover:font-medium'>Cars</a>
                <a href='#' className='hover:font-medium'>Contact</a>
            </aside>
        </nav>
        
        <section className='h-[75vh] bg-[url(https://images.hdqwalls.com/wallpapers/hot-wheels-and-jet-21.jpg)] bg-center bg-cover flex justify-center items-center '>
            <div className='bg-[rgba(0,0,0,0.5)] text-white flex flex-col items-center justify-center gap-6 p-6 rounded-2xl'>
                <h1 className='text-5xl font-bold'>Premium Toy Cars</h1>
                <p>Collect the coolest minature cars</p>
                <button className='bg-blue-600 px-8 py-3 rounded-4xl hover:bg-blue-800'>Shop Now</button>
            </div>
        </section>

        <section className='bg-gray-50'>
            <h1 className='text-center pt-12 text-3xl font-bold'>Featured Hot Wheels Cars</h1>
            <article className='flex justify-evenly items-center py-5 flex-wrap'>
                <div className='p-4 rounded-2xl bg-white shadow my-4'>
                    <img src="https://images.unsplash.com/photo-1648711727240-7ee250483923?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90JTIwd2hlZWxzfGVufDB8fDB8fHww" alt="Car 1" className="h-50 w-112.5 object-cover rounded-2xl"/>  {/* Tailwind uses a spacing scale where: 1 unit = 4px*/}
                    <h1 className='text-2xl font-semibold my-2'>Red Sports Car</h1>
                    <p className='text-gray-800'>High-Speed Mini Racer</p>
                    <p className='text-blue-600 font-bold mt-4'>₹ 499</p>
                </div>
                <div className='p-4 rounded-2xl bg-white shadow my-4'>
                    <img src="https://images.unsplash.com/photo-1648711085453-1ad7ef382e69?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2hlZWxzfGVufDB8fDB8fHww" alt="Car 2" className="h-50 w-112.5 object-cover rounded-2xl"/>
                    <h1 className='text-2xl font-semibold my-2'>Yellow Drift Car</h1>
                    <p className='text-gray-800'>Limited-Edition Drift Model</p>
                    <p className='text-blue-600 font-bold mt-4'>₹ 599</p>
                </div>
                <div className='p-4 rounded-2xl bg-white shadow my-4'>
                    <img src="https://i.ytimg.com/vi/8DHdVqRbVvU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBNm1MKLuCM2rCdMQavC9cYMlOSxQ" alt="Car 3" className="h-50 w-112.5 object-cover rounded-2xl"/>
                    <h1 className='text-2xl font-semibold my-2'>Red Sports Car</h1>
                    <p className='text-gray-800'>Futuristic Design & Fast</p>
                    <p className='text-blue-600 font-bold mt-4'>₹ 699</p>
                </div>
            </article>  
        </section>

        <section className='mb-6'>
            <h1 className='text-center pt-12 text-3xl font-bold'>Why Choose Us?</h1>
            <article className='pt-14 flex justify-evenly items-center flex-wrap gap-8 py-10'>
                <div className='flex flex-col justify-evenly items-center'>
                    <h1 className='text-3xl'>🚗</h1>
                    <p className='font-semibold pt-3'>Premium Collections</p>
                </div>

                <div className='flex flex-col justify-evenly items-center'>
                    <h1 className='text-3xl'>⚡</h1>
                    <p className='font-semibold pt-3'>Fast Delivery</p>
                </div>

                <div className='flex flex-col justify-evenly items-center'>
                    <h1 className='text-3xl'>💳</h1>
                    <p className='font-semibold pt-3'>Secure Payments</p>
                </div>
            </article>
        </section>

        <footer className='bg-blue-950 flex justify-center text-white py-6'>
            <p>©️ 2025 Toy Cars Store - All Rights Reserved</p>
        </footer>
    </>
  )
}

export default HotWheels