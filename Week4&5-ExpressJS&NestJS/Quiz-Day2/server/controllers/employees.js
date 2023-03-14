const findAll = async (req, res) => {
  try {
    const employee = await req.context.models.employees.findAll();
    return res.send(employee);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const findOne = async (req, res) => {
  try {
    const employee = await req.context.models.employees.findOne({
      where: { employee_id: req.params.id },
    });
    return res.send(employee);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const create = async (req, res) => {
  try {
    const employee = await req.context.models.employees.create({
      employee_id: req.body.employee_id,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      phone_number: req.body.phone_number,
      hire_date: req.body.hire_date,
      job_id: req.body.job_id,
      salary: req.body.salary,
      commision_pct: req.body.commision_pct,
      manager_id: req.body.manager_id,
      department_id: req.body.department_id,
    });
    return res.send(employee);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const update = async (req, res) => {
  try {
    const employee = await req.context.models.employees.update(
      {
        email: req.body.email,
      },
      { returning: true, where: { employee_id: req.params.id } }
    );
    return res.send(employee);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleted = async (req, res) => {
  try {
    const employee = await req.context.models.employees.destroy({
      where: { employee_id: req.params.id },
    });
    return res.send(`delete ${employee} rows`);
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
