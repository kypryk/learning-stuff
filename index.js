const { sendSlackMessage, contactsBook } = require('./utils');

// создать конструктор SlackGroupMates, который принимает 2 аргумента: 1 - Имя автора сообщений (Ваше имя), 2 - объект с контактами (contactsBook)
// возвращаемый объект будет иметь метод addRecepient(fullName), который будет добавлять адресата (если такой есть в книге контактов)
// addRecepient можно вызывать чкерез точку несколько раз (chaining). Если нет такого имени в списке (или просто опечатались) - он просто не добавляет адресата
// такжже нужен метод setMessage(message) - в качестве аргумента передается сообщение, и формирует сроку в виде:
// [Имя Автора] says to <@id>, <@id> : message
// метод send - просто отправляет сформированную строку в слак (ну или console.log())

//Create an instanse of the object function
const sndmsg = new SlackGroupMates("Confused Tester", contactsBook);

sndmsg.addRecepient('Olga').addRecepient('Sasha Shapoval').setMessage('a bit late to the party but hey').send()

//1. Create an object with function constructor
function SlackGroupMates(name, contacts) {
    
    this.ids = ''

    this.addRecepient = function(fullName){
        
        //check if the name exists
        if(fullName in contacts){
            //search for right key and take id 
            for(let key in contacts){
                if(key === fullName){     
                    this.ids += '<@' + contacts[key] + '>, '
                    console.log(this.ids)
                }
            }
        }
        return this
    };
    this.setMessage = function(string){
        //build a message 
        this.message = '[' + name + ']' + ' says to ' + this.ids + ': ' + string
        //console.log(message)
        return this
    };
    this.send = function(){
        sendSlackMessage(this.message);
    };
}