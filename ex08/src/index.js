function getUsername(email) {
    var username = '';
    // Only change code below this line
        switch (email) {
            case 'user1@mail.com':
                username = 'user1';
                break;
            case 'user2@mail.com':
                username = 'user2';
                break;
            case 'user3@mail.com':
                username = 'user3';
                break;
            case 'user4@mail.com':
                username = 'user4';
                break;
            case 'user5@mail.com':
                username = 'user5';
                break;
            case 'user6@mail.com':
                username = 'user6';
                break;
                
        }

         var username = {

            "user1@mail.com" : "user1",
            "user2@mail.com" : "user2",
            "user3@mail.com" : "user3",
            "user4@mail.com" : "user4",
            "user5@mail.com" : "user5",
            "user6@mail.com" : "user6",
        };

    // Only change code above this line
    return username;
}
getUsername("user2@mail.com");
module.exports = getUsername;