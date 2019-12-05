
class HomeController {

  async store(req, res, next) {

    return res
      .status(200)
      .json({
        mensagem: 'rota import !!'
      });

  }


}

export default new HomeController();