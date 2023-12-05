const Deportista = require("../models/deportista.model");
const httpError = require("http-errors");

const deportistaController = {};

deportistaController.create = async (req, res, next) => {
    try {
        const { name, last_name, sports, birth_date, height, weight, email } = req.body;

        const { identifier } = req.params;
        let deportista = await Deportista.findById(identifier);
        if (!deportista) {
            deportista = new Deportista();
        }

        deportista["name"] = name;
        deportista["last_name"] = last_name;
        deportista["sports"] = sports;
        deportista["birth_date"] = birth_date;
        deportista["height"] = height;
        deportista["weight"] = weight;
        deportista["email"] = email;


        const deportistaSaved = await deportista.save();
        if (!deportistaSaved) {
            return res.status(409).json({ error: "Error al crear" });
        }
        res.status(201).json({ message: "Deportista creado", data: deportistaSaved })
    } catch (e) {
        console.error(e);
        return res.status(500).json({ error: "Error interno servidor" });
    }
}


deportistaController.findAll = async (req, res, next) => {
    try {

        const deportista = await Deportista.find({ hidden: false });

        return res.status(200).json({ deportista });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ error: "Error interno servidor" });
    }
}

deportistaController.finOneById = async (req, res, next) => {
    try {
        const { identifier } = req.params;

        const deportista = await Deportista.findById(identifier);

        if (!deportista) {
            return res.status(404).json({ error: "Ejercicio no definido" });
        }

        return res.status(200).json(deportista);
    } catch (e) {
        console.error(e);
        return res.status(500).json({ error: "Error interno servidor" });
    }
}

deportistaController.finOneByEmail = async (req, res, next) => {
    try {
        const { email } = req.params;
        console.log("email", email);
        const player = await Deportista.findOne({ email })
        console.log("player", player);
        if (!player) {
            return res.status(404).json({ error: `Not Found: no player with email ${email}` })
        }

        return res.status(200).json(player);
    } catch (error) {
        console.error("Error finding player by email", e);
        return res.status(500).json({ error: `Internal Server Error:  + ${e}` });
    }
}

deportistaController.deleteById = async (req, res, next) => {
    try {
        const { identifier } = req.params;

        const deportista = await Deportista.findByIdAndDelete(identifier);
        if (!deportista) {
            return res.status(404).json({ error: "Deportista not found" });
        }
        return res.status(200).json({ message: "Deportista eliminado" })
    } catch (e) {
        console.error(e);
        return res.status(500).json({ error: "Error interno servidor" });
    }
}

deportistaController.updateEquip = async (req, res, next) => {
    try {
        const { identifier } = req.params;
        const { body } = req;
        const toUpdateDeportista = await Deportista.findById(identifier);
        if (!toUpdateDeportista) throw httpError(404, "Equipo not found");
        const updateDeportista = await Deportista.findByIdAndUpdate(identifier, body, {
            new: true,
        })
        if (!updateDeportista) throw httpError(500, "Equipo no actualizado");
        res.status(200).json({ message: "Equipo actualizado", data: updateDeportista });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ error: "Error interno servidor" });
    }
}

module.exports = deportistaController;
