const findAll = async (req, res) => {
  try {
    const job_history = await req.context.models.job_history.findAll();
    return res.send(job_history);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const findOne = async (req, res) => {
  try {
    const job_history = await req.context.models.job_history.findOne({
      where: { employee_id: req.params.id },
    });
    return res.send(job_history);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const create = async (req, res) => {
  try {
    const job_history = await req.context.models.job_history.create({
      employee_id: req.body.employee_id,
      start_date: req.body.start_date,
      end_date: req.body.end_date,
      job_id: req.body.job_id,
      department_id: req.body.department_id,
    });
    return res.send(job_history);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const update = async (req, res) => {
  try {
    const job_history = await req.context.models.job_history.update(
      {
        start_date: req.body.start_date,
      },
      { returning: true, where: { employee_id: req.params.id } }
    );
    return res.send(job_history);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleted = async (req, res) => {
  try {
    const job_history = await req.context.models.job_history.destroy({
      where: { employee_id: req.params.id },
    });
    return res.send(`delete ${job_history} rows`);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export default {
  findAll,
  findOne,
  create,
  update,
  deleted,
};
