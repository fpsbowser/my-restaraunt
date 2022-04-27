const contact = () => {

        const title = document.createElement('h1');
        title.className = 'contact-title'
        title.innerHTML = 'CONTACT'
        
        const para = document.createElement('p');
        para.className = 'contact-para'
        para.innerHTML = `<br>We are located right on Saco St, Varrock Gielinor, 12345.<br><br>You can reach us by phone at: 303-123-4567 or email at: prattsbrick@gmail.com`
    
        return {title, para}

}

export default contact;