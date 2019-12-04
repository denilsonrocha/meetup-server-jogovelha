

class HomeController {

  async store(req, res) {

    return res
      .status(200)
      .json({
        mensagem: 'Sucesso !!'
      });

  }


}

export default new HomeController();