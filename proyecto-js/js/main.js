$(document).ready(function(){
     $('.galeria').bxSlider({
          mode: 'fade',
          captions: true,
          slideWidth: 1200,
          responsive: true,
          pager: false
     });

     //post
     var post = [
          {
               title: "prueba de titulo 1",
               date: moment().format("MMMM Do YYYY"),
               content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus lorem sit amet libero accumsan, ac ultricies odio dignissim. In sit amet odio vel sem pretium mollis tempor nec lacus. Fusce ullamcorper sollicitudin mollis. Mauris at ultrices velit. Nam tempus at risus sed tempor. Cras non volutpat est, nec consectetur risus. Cras finibus feugiat pellentesque. Ut eros neque, commodo vitae sagittis et, fermentum eu mauris. Ut vehicula, lectus at molestie rutrum, lacus libero tempor odio, quis auctor quam lorem non nunc. Praesent iaculis faucibus nulla, eu maximus arcu mattis auctor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla pretium ut nisl non rutrum. Sed rhoncus dui at elementum dignissim. Nam suscipit ut urna sed aliquam. Donec et mollis arcu.'
          
          },
          {
               title: "prueba de titulo 2",
               date: new Date(),
               content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus lorem sit amet libero accumsan, ac ultricies odio dignissim. In sit amet odio vel sem pretium mollis tempor nec lacus. Fusce ullamcorper sollicitudin mollis. Mauris at ultrices velit. Nam tempus at risus sed tempor. Cras non volutpat est, nec consectetur risus. Cras finibus feugiat pellentesque. Ut eros neque, commodo vitae sagittis et, fermentum eu mauris. Ut vehicula, lectus at molestie rutrum, lacus libero tempor odio, quis auctor quam lorem non nunc. Praesent iaculis faucibus nulla, eu maximus arcu mattis auctor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla pretium ut nisl non rutrum. Sed rhoncus dui at elementum dignissim. Nam suscipit ut urna sed aliquam. Donec et mollis arcu.'
          },
          {
               title: "prueba de titulo 3",
               date: new Date(),
               content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus lorem sit amet libero accumsan, ac ultricies odio dignissim. In sit amet odio vel sem pretium mollis tempor nec lacus. Fusce ullamcorper sollicitudin mollis. Mauris at ultrices velit. Nam tempus at risus sed tempor. Cras non volutpat est, nec consectetur risus. Cras finibus feugiat pellentesque. Ut eros neque, commodo vitae sagittis et, fermentum eu mauris. Ut vehicula, lectus at molestie rutrum, lacus libero tempor odio, quis auctor quam lorem non nunc. Praesent iaculis faucibus nulla, eu maximus arcu mattis auctor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla pretium ut nisl non rutrum. Sed rhoncus dui at elementum dignissim. Nam suscipit ut urna sed aliquam. Donec et mollis arcu.'
          },
          {
               title: "prueba de titulo 4",
               date: new Date(),
               content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus lorem sit amet libero accumsan, ac ultricies odio dignissim. In sit amet odio vel sem pretium mollis tempor nec lacus. Fusce ullamcorper sollicitudin mollis. Mauris at ultrices velit. Nam tempus at risus sed tempor. Cras non volutpat est, nec consectetur risus. Cras finibus feugiat pellentesque. Ut eros neque, commodo vitae sagittis et, fermentum eu mauris. Ut vehicula, lectus at molestie rutrum, lacus libero tempor odio, quis auctor quam lorem non nunc. Praesent iaculis faucibus nulla, eu maximus arcu mattis auctor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla pretium ut nisl non rutrum. Sed rhoncus dui at elementum dignissim. Nam suscipit ut urna sed aliquam. Donec et mollis arcu.'
          },
          {
               title: "prueba de titulo 5",
               date: new Date(),
               content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus lorem sit amet libero accumsan, ac ultricies odio dignissim. In sit amet odio vel sem pretium mollis tempor nec lacus. Fusce ullamcorper sollicitudin mollis. Mauris at ultrices velit. Nam tempus at risus sed tempor. Cras non volutpat est, nec consectetur risus. Cras finibus feugiat pellentesque. Ut eros neque, commodo vitae sagittis et, fermentum eu mauris. Ut vehicula, lectus at molestie rutrum, lacus libero tempor odio, quis auctor quam lorem non nunc. Praesent iaculis faucibus nulla, eu maximus arcu mattis auctor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla pretium ut nisl non rutrum. Sed rhoncus dui at elementum dignissim. Nam suscipit ut urna sed aliquam. Donec et mollis arcu.'
          }
     ];

     console.log(post);
       
})