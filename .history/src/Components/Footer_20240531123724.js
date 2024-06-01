const Footer = () => {
    return (
        <footer className="footer bg-dark text-white">

            <div className="bg-secondary text-center py-3">
                <p className="mb-0">
                    Created by &copy; {new Date().getFullYear()} CJFoods Website. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;