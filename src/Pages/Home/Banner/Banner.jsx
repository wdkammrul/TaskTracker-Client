import { NavLink } from "react-router-dom";

const Banner = () => {
    return (
        <div className="hero w-[400px] md:w-[740px] lg:w-full mx-auto bg-teal-200 rounded-lg mt-10">

            <div className="hero h-[230px] md:h-[430px] rounded-lg" style={{ backgroundImage: 'url(https://i.ibb.co/mDKr874/broadcast-print-journalism-vector-isometric-icon-set-radio-television-broadcasting-press-med-453374.jpg)' }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content ">
                    <div className="max-w-7xl">
                        <h1 className="mb-5 text-2xl md:text-4xl lg:text-5xl font-extrabold text-blue-500">SCC Technovision Inc. Task Management Platform.</h1>
                        <p className="mb-5 text-xl md:text-4xl my-6 font-medium text-blue-400"> Innovative Task Management Solution.</p>
                        <div className="form-control ">
                            <div className="input-group flex justify-center mx-auto mt-4">
                                <NavLink to='/' className="btn btn-primary bg-blue-500 mt-6 w-64 flex justify-center mx-auto text-white">Let’s Explore</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Banner;