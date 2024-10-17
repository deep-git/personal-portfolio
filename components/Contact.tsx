"use client";

import React, { useState } from 'react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import IconButtons from './buttons/IconButtons';
import { BiMailSend } from 'react-icons/bi';
import { sendContactForm } from '@/lib/api';
import Spinner from './Spinner';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        submit: "",
    });

    const handleUpdateForm = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const validateForm = () => {
        let isValid = true;
        const newError = {
            name: "",
            email: "",
            subject: "",
            message: "",
            submit: "",
        };

        if (formData.name.trim() === "") {
            newError.name = "Name must be filled.";
            isValid = false;
        }
        if (formData.email.trim() === "") {
            newError.email = "Email must be filled.";
            isValid = false;
        }
        if (formData.subject.trim() === "") {
            newError.subject = "Subject must be filled.";
            isValid = false;
        }
        if (formData.message.trim() === "") {
            newError.message = "Message must be filled.";
            isValid = false;
        }

        setError(newError);
        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsLoading(true);
        setError({
            name: "",
            email: "",
            subject: "",
            message: "",
            submit: "",
        });

        if (!validateForm()) {
            setIsLoading(false);
            return;
        }

        try {
            await sendContactForm(formData);

            // Clear form data on successful submission
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });

        } catch (error) {
            if (error instanceof Error) {
                setError((prev) => ({
                    ...prev,
                    submit: error.message || "Error occurred, unable to submit email message",
                }));
            } else {
                setError((prev) => ({
                    ...prev,
                    submit: "An unknown error occurred",
                }));
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col gap-10 mt-20 mb-20 px-5 py-5 sm:p-10 bg-black_background text-white rounded-2xl">
            <div className="flex items-center gap-5 md:gap-20 flex-wrap">
                <h2 className="text-[32px] md:text-[40px] lg:text-[64px]">Contact</h2>
                <div className="flex items-center gap-4 flex-wrap">
                    <IconButtons Icon={BiMailSend} classStyle="rounded-lg" innerClassStyle="rounded-lg" iconClassStyle="w-7 h-7" />
                    <span className="hidden sm:flex text-[16px] sm:text-[20px]">deepakthangella5@gmail.com</span>
                </div>
            </div>
            <div className="flex flex-col px-4 md:px-10 lg:px-0 lg:ml-10 xl:ml-32 gap-2 w-full lg:w-[400px]">
                <div className="flex items-center gap-3">
                    <img src="/icons/main/hello.png" alt="hand wave" className="w-10 h-10" />
                    <span className="text-[24px]">Get in Touch!</span>
                </div>
                <p className="text-[16px]">I’d love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out. Your messages are always welcome, and I’ll do my best to get back to you as soon as possible. Let’s connect!</p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-14">
                <div className="flex flex-col lg:flex-row gap-20 w-full px-4 sm:px-10 xl:px-32">
                    <div className="flex flex-col gap-7 w-full lg:w-[400px] h-[250px]">
                        <div className="flex flex-col gap-2 flex-1">
                            <div className="flex items-center gap-3">
                                <label htmlFor="name" className="text-[20px]">Your Name <span className="text-red">*</span></label>
                                {error.name && <span className="text-[12px] text-red">{error.name}</span>}
                            </div>
                            <Input id="name" className="bg-dark_gray border-[#474747]" type="text" name="name" value={formData.name} onChange={handleUpdateForm} />
                        </div>
                        <div className="flex flex-col gap-2 flex-1">
                            <div className="flex items-center gap-3">
                                <label htmlFor="email" className="text-[20px]">Your Email <span className="text-red">*</span></label>
                                {error.email && <span className="text-[12px] text-red">{error.email}</span>}
                            </div>
                            <Input id="email" className="bg-dark_gray border-[#474747]" type="email" name="email" value={formData.email} onChange={handleUpdateForm} />
                        </div>
                        <div className="flex flex-col gap-2 flex-1">
                            <div className="flex items-center gap-3">
                                <label htmlFor="subject" className="text-[20px]">Subject <span className="text-red">*</span></label>
                                {error.subject && <span className="text-[12px] text-red">{error.subject}</span>}
                            </div>
                            <Input id="subject" className="bg-dark_gray border-[#474747]" type="text" name="subject" value={formData.subject} onChange={handleUpdateForm} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 flex-1">
                        <div className="flex items-center gap-3">
                            <label htmlFor="message" className="text-[20px]">Your Message <span className="text-red">*</span></label>
                            {error.message && <span className="text-[12px] text-red">{error.message}</span>}
                        </div>
                        <Textarea id="message" className="h-full min-h-[250px] bg-dark_gray border-[#474747]" name="message" value={formData.message} onChange={handleUpdateForm} />
                    </div>
                </div>
                {error.submit && <div className="text-red text-[12px] w-max ml-auto mr-4 sm:mr-10 xl:mr-32">{error.submit}</div>}

                <button type="submit" disabled={isLoading} className={`bg-purple w-max px-10 py-3 text-[20px] rounded-md ml-auto mr-4 sm:mr-10 xl:mr-32 hover:bg-purple/90 transition duration-100 disabled:bg-purple/40 ${isLoading ? "" : "active:scale-95"}`}>
                    {isLoading ? <Spinner /> : "Send"}
                </button>
            </form>
        </div>
    );
};

export default Contact;