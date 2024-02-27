import React from 'react'
import  "./Accordion.css";

export default function Accordion() {
    return (
        <>
            <div class="accordion-wrapper">
                <div class="accordion">
                    <input type="radio" name="radio-a" id="check1" checked />
                        <label class="accordion-label" htmlFor="check1">Is replyment free?</label>
                        <div class="accordion-content">
                            <p>Yes, it's free &#128522;</p>
                        </div>
                </div>
                <div class="accordion">
                    <input type="radio" name="radio-a" id="check2" />
                        <label class="accordion-label" htmlFor="check2">Accordion 2</label>
                        <div class="accordion-content">
                            <p>I hope you are enjoing the video, don't forget to give your feedback in comment section</p>
                        </div>
                </div>
                <div class="accordion">
                    <input type="radio" name="radio-a" id="check3" />
                        <label class="accordion-label" htmlFor="check3">Accordion 3</label>
                        <div class="accordion-content">
                            <p>If you liked then don't forget to subscribe the channel for latest videos. </p>
                        </div>
                </div>
                <div class="accordion">
                    <input type="radio" name="radio-a" id="check4" />
                        <label class="accordion-label" htmlFor="check4">Accordion 4</label>
                        <div class="accordion-content">
                            <p>If you liked then don't forget to subscribe the channel for latest videos. </p>
                        </div>
                </div>
                <div class="accordion">
                    <input type="radio" name="radio-a" id="check5" />
                        <label class="accordion-label" htmlFor="check5">Accordion 5</label>
                        <div class="accordion-content">
                            <p>If you liked then don't forget to subscribe the channel for latest videos. </p>
                        </div>
                </div>
            </div>
        </>
    )
}