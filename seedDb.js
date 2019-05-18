const { AuthUser, City, Message } = require('./models.js')


const seedDb = async () => {
  try {

    const testUser = await AuthUser.create({
      username:'test',
      password: 'test',
      home_area: 'New York, NY'
    });
    const testUser2 = await AuthUser.create({
      username: 'test2',
      password: 'test2',
      home_area: 'London, UK'
    })

    const london = await City.create({
      name: "London, UK",
    });
    const testMessage = await Message.create({
      message: "Hey! Try this place!!!!"
    });

    
    // await london.setUser([testUser], { through: { status: 'user_trip_xref' }})
    testUser.setCity(london);
    // await testUser.setMessage(testMessage, { through: { status: 'user_to_message_xref' }})

    // Post.hasMany(Comment, {onDelete: 'cascade'});
    // Comment.belongsTo(Post);
    


  } catch (e) { 
    console.log(e.message);
  } finally {
    await process.exit();
  }
}




seedDb();


