$(document).ready(function() {
  
  //game variables
  var random = Math.floor(Math.random() * (120 - 19 + 1) ) + 19;

  var userNumber = 0;
  var blueNumber = Math.floor(Math.random() * 12) + 1;
  var redNumber = Math.floor(Math.random() * 12) + 1;
  var greenNumber = Math.floor(Math.random() * 12) + 1;
  var yellowNumber = Math.floor(Math.random() * 12) + 1;

  var wins = 0;
  var loses = 0;
  
  //input random number into guess div
  console.log(random)
  $('#guesser').text(random);

  $('#user-wins').text(wins)
  $('#user-loses').text(loses)
    
    //reset function//
    function reset () {
      var random = Math.floor(Math.random() * (120 - 19 + 1) ) + 19;
      console.log(random)
      var blueNumber = Math.floor(Math.random() * 12) + 1;
      var redNumber = Math.floor(Math.random() * 12) + 1;
      var greenNumber = Math.floor(Math.random() * 12) + 1;
      var yellowNumber = Math.floor(Math.random() * 12) + 1;
      userNumber = 0;
      console.log(random)
      $('#guesser').text(random)
      $('#user-number').text(userNumber);
    }

    //Win Function
    function winner () {
      alert('You Win!!!!!!!');
      wins++;
      $('#user-wins').text(wins);
      reset();
    }

    //Lose Function
    function loser () {
      alert('What a loser!!!!!!!');
      loses++;
      $('#user-loses').text(loses);
      reset();
    }
    
    //Crystal clicks//

    //blue crystal
    $('#crystal-div').on('click','#blue-crystal' , function(){
      userNumber = userNumber + blueNumber;
       console.log(userNumber);
      $('#user-number').text(userNumber);
      if (userNumber === random) {
      winner();
      }
      else if (userNumber > random) {
        loser();
      }
      })
    
      //red crystal
    $('#red-crystal').click(function(){
      userNumber = userNumber + redNumber;
      console.log(redNumber + userNumber);
      $('#user-number').text(userNumber);
      if (userNumber === random) {
        winner();
        }
        else if (userNumber > random) {
          loser();
        }
      })

      //yellow crystal
    $('#yellow-crystal').click(function(){
      userNumber = userNumber + yellowNumber;
      console.log(yellowNumber + userNumber);
      $('#user-number').text(userNumber);
      if (userNumber === random) {
        winner();
        }
        else if (userNumber > random) {
          loser();
        }
          
      })
    
      //green crystal
    $('#green-crystal').click(function(){
      userNumber = userNumber + greenNumber;
      console.log(greenNumber + userNumber);
      $('#user-number').text(userNumber);
      if (userNumber === random) {
        winner();
        }
        else if (userNumber > random) {
          loser();
        }
      })
    });
  
    
    