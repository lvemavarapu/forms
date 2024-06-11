import React, {useState, useEffect}from 'react'
import axios from 'axios';
import config from "../config";
import "./team.css"
import ReactPaginate from "react-paginate";

config.Image_Gallery_Client_ID = "664cKEdhhG9s06-OfDd9UzmKvZD6iOXLzadGg9lfRww";
export default function Team() {
    const [page, setPage] = useState(1);
    const [images, setImages] = useState([]);
       const [pageCount, setPageCount] = useState(0);
    const [imagesOffset, setImagesOffset] = useState(0);

    useEffect(() => {

        axios
            .get(
                // `https://api.unsplash.com/photos/?client_id=${config.Image_Gallery_Client_ID}&page=${page}`
                `https://api.unsplash.com/photos/?client_id=${config.Image_Gallery_Client_ID}&per_page=30`
            )

            .then((res) => {
                setImages((prevState) => [...res.data]);

                // console.log(res.data);
                return res.data;
            })
            .catch((err) => {
                console.log(err);

            });
    }, []);

    useEffect(() => {
        const endOffset = imagesOffset + 8;
        // setCurrentImages(images.slice(imagesOffset, endOffset));
        setPageCount(Math.ceil(images.length / 8));
    }, [images, imagesOffset]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * 8) % images.length;
        // setImagesOffset(newOffset);
        setPage(newOffset)
    };


    return (
        <>
            <h2>My Image Gallery</h2>
            <div className="Team">
                {images?.map((image, i) => {
                    return (
                        <div className="img-wrapper" key={i}>
                            <img src={image?.urls?.thumb} alt={image.alt_description}/>
                        </div>
                );
                })}
                <div className="pagination">
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel="next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        previousLabel="< previous"
                        renderOnZeroPageCount={null}
                        breakClassName={"page-item"}
                        breakLinkClassName={"page-link"}
                        containerClassName={"pagination"}
                        pageClassName={"page-item"}
                        pageLinkClassName={"page-link"}
                        previousClassName={"page-item"}
                        previousLinkClassName={"page-link"}
                        nextClassName={"page-item"}
                        nextLinkClassName={"page-link"}
                        activeClassName={"active"}
                    />
                </div>

            </div>

        </>
    )
}