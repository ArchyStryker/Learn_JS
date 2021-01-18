while (true) {
    let login = prompt ('Введите свой логин.' , '');
    if (login == null) {
        alert ('Вход отменен.');
        break;
    } else if (login == 'admin'||'Admin'||'ADMIN') {
        while (true) {
            let password = prompt ('Введите пароль.' , '');
            if (password == 'BlackLord') {
                alert ('Вход разрешен.');
                break;
            } else if (password == null) {
                alert ('Вход отменен.');
                break;
            } else {
                alert ('Неверный пароль, попробуйте ещё раз.');
            }
        }
        break;
    } else {
        alert ('Неизвестный логин, попробуйте ещё раз.');    
    }
}
