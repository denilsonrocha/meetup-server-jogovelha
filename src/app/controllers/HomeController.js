

class HomeController {

  async store(req, res) {

    req.io.emit('notification', { mensagem: 'on-line' });

    // return res
    //   .status(200)
    //   .json({
    //     mensagem: 'Sucesso !!'
    //   });

  }


}

export default new HomeController();