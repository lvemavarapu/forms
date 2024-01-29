
import React, {useState} from "react";
import { useForm } from "react-hook-form";
import '../components/styles/contactdetails.css';

function Address() {
    const [selected, setSelected] = useState("");
    const changeHandler = e => {
        setSelected(e.target.value);
    };

    const {
        register,
        formState: { errors } } = useForm();
    return (
        <>
            <p class ="subheading"> Residential Address</p>
        <div id="address">
             <div className="raddress">
                <label>Residential Address</label><br/>
                <input type="text" id="suburb" placeholder="Address"
                       {...register("suburb", {
                           pattern: {
                               required: "*"
                           }
                       })}
                />
                {errors.suburb && errors.suburb.message}
            </div>
            <div className="suburb">
                <label>Suburb</label><br/>
                <input type="text" id="suburb" placeholder="Suburb"
                       {...register("suburb", {
                           pattern: {
                               required: "*"
                           }
                       })}
                />
                {errors.suburb && errors.suburb.message}
            </div>
        </div>

            <div id ="state">
                <div className="state">
                    <label>State</label><br />
                    <select>
                        <option value="QLD">QLD</option>
                        <option value="NSW">NSW</option>
                        <option value="VIC">VIC</option>
                        <option value="ACT">ACT</option>
                        <option value="SA">SA</option>
                        <option value="WA">WA</option>
                        <option value="NT">NT</option>
                        <option value="Tas">TAS</option>
                    </select>
                </div>
                <div className="postcode">
                    <label>PostCode</label><br/>
                    <input type="text" id="suburb" placeholder="Postcode"
                           {...register("postcode", {
                               pattern: {
                                   required: "*"
                               }
                           })}
                    />
                    {errors.postcode && errors.postcode.message}
                </div>
            </div>

            <p className ="subheading"> Postal Address</p>
            <div id="postal">
                <input
                    type="radio"
                    value="different"
                    id="different"
                    checked={selected === "different"}
                    name="address"
                    onChange={changeHandler}
                />
                <label>Different from residential address</label><br/>
                <div aria-hidden={selected !== "different" ? true : false}>
                    <br/>
                    <div id="address">
                        <div className="address">
                            <label>Postal Address</label><br/>
                            <input type="text" id="address" placeholder="Address"
                                   {...register("suburb", {
                                       pattern: {
                                           required: "*"
                                       }
                                   })}
                            />
                            {errors.suburb && errors.suburb.message}
                        </div>
                        <div className="suburb">
                            <label>Suburb</label><br/>
                            <input type="text" id="suburb" placeholder="Suburb"
                                   {...register("suburb", {
                                       pattern: {
                                           required: "*"
                                       }
                                   })}
                            />
                            {errors.suburb && errors.suburb.message}
                        </div>
                    </div>

                    <div id ="state">
                        <div className="state">
                            <label>State</label><br />
                            <select>
                                <option value="QLD">QLD</option>
                                <option value="NSW">NSW</option>
                                <option value="VIC">VIC</option>
                                <option value="ACT">ACT</option>
                                <option value="SA">SA</option>
                                <option value="WA">WA</option>
                                <option value="NT">NT</option>
                                <option value="Tas">TAS</option>

                            </select>
                        </div>
                        <div className="postcode">
                            <label>PostCode</label><br/>
                            <input type="text" id="suburb" placeholder="Postcode"
                                   {...register("postcode", {
                                       pattern: {
                                           required: "*"
                                       }
                                   })}
                            />
                            {errors.postcode && errors.postcode.message}
                        </div>
                    </div>

                </div>
                <input
                    type="radio"
                    name="address"
                    value="same"
                    id="same"
                    checked={selected === "same"}
                    onChange={changeHandler}
                />
                <label>Same as residential address</label>
            </div>

            <div id ="contact-method">
                <label>Preferred contact method</label><br/>
            <label>
                <input
                    name="qual"
                    type="checkbox"
                    value="Phone"
                    onChange={changeHandler}
                />{' '}
                Phone
            </label>
            <label>
                <input
                    name="qual"
                    type="checkbox"
                    onChange={changeHandler}
                />{' '}
                Email
            </label>
            <label>
                <input
                    name="qual"
                    type="checkbox"
                    value="Mobile"
                    onChange={changeHandler}
                />{' '}
                Mobile
            </label>
            </div>
            <br />
</>
            );
}
export default Address;