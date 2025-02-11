import { Link } from "react-router-dom";

const Footer = () => {
  const footerItems = [
    {
      id: "1",
      title: "Certificates",
      href: "https://drive.google.com/drive/folders/11IpWKTqZqLCuqKCUMGjLtyPZs0NXpr74",
      svgImage: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="fill-current text-green-200 hover:text-green-400 transition-colors duration-300"
          width="24"
          height="24"
          viewBox="0 0 512 512"
        >
          <path d="M211 7.3C205 1 196-1.4 187.6 .8s-14.9 8.9-17.1 17.3L154.7 80.6l-62-17.5c-8.4-2.4-17.4 0-23.5 6.1s-8.5 15.1-6.1 23.5l17.5 62L18.1 170.6c-8.4 2.1-15 8.7-17.3 17.1S1 205 7.3 211l46.2 45L7.3 301C1 307-1.4 316 .8 324.4s8.9 14.9 17.3 17.1l62.5 15.8-17.5 62c-2.4 8.4 0 17.4 6.1 23.5s15.1 8.5 23.5 6.1l62-17.5 15.8 62.5c2.1 8.4 8.7 15 17.1 17.3s17.3-.2 23.4-6.4l45-46.2 45 46.2c6.1 6.2 15 8.7 23.4 6.4s14.9-8.9 17.1-17.3l15.8-62.5 62 17.5c8.4 2.4 17.4 0 23.5-6.1s8.5-15.1 6.1-23.5l-17.5-62 62.5-15.8c8.4-2.1 15-8.7 17.3-17.1s-.2-17.4-6.4-23.4l-46.2-45 46.2-45c6.2-6.1 8.7-15 6.4-23.4s-8.9-14.9-17.3-17.1l-62.5-15.8 17.5-62c2.4-8.4 0-17.4-6.1-23.5s-15.1-8.5-23.5-6.1l-62 17.5L341.4 18.1c-2.1-8.4-8.7-15-17.1-17.3S307 1 301 7.3L256 53.5 211 7.3z" />
        </svg>
      ),
    },
    {
      id: "2",
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/prapul-gowda-b-l-62a9482b2/",
      svgImage: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="fill-current text-green-200 hover:text-green-400"
          width="24"
          height="24"
          fill="yellow"
          viewBox="0 0 24 24"
        >
          <path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      id: "3",
      title: "E-mail",
      href: "mailto:gowdaprapul7172@gmail.com",
      svgImage: (
        <svg 
        xmlns="http://www.w3.org/2000/svg"
        className="fill-current text-green-200 hover:text-green-400"
          width="24"
          height="24"
          fill="yellow"
         viewBox="0 0 512 512">
          <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
      ),
    },
    {
      id: "4",
      title: "Phone",
      href: "tel:+91 8904560115",
      svgImage: (
        <svg 
        xmlns="http://www.w3.org/2000/svg"
        className="fill-current text-green-200 hover:text-green-400"
          width="24"
          height="24"
          fill="yellow"
         viewBox="0 0 512 512">
          <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
      ),
    },
  ];
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center sm:flex-row justify-between">
          <div className="mb-4 sm:mb-0">
            <p className="text-center sm:text-left">
              &copy; 2024 Prapul Gowda B L . All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            {footerItems.map((item) => {
              return (
                <Link
                  key={item.id}
                  to={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-500 transition-all duration-300"
                >
                  {item.svgImage}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
