export default function DarkTheme(){
    return(
        <style jsx global>{`
            :root {
                --background-color: rgb(39, 39, 39);
                --link-color: rgb(196, 196, 0);
                --text-color: rgb(180, 180, 180);
            }
        `}</style>
    );
}