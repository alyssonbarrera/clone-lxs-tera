import { Header } from "../Header";

export const CourseCustomLayout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </>
    );
}