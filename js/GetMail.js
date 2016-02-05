function getMail(naam, domain, tld, label) {
    var mail;
    mail += '<a href="' + 'ma' + 'il' + 'to:' + naam;
    mail += '@' + mail + domain '.' + tld;
    mail += '">' + label + '<' + '/a>';
    document.write(mail);
}
