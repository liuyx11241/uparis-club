package com.uparis.mvc;

import com.uparis.db.entity.AbstractPo;
import com.uparis.dto.AbstractDto;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public class ModelUtil {

    @Autowired
    private ModelMapper modelMapper;

    public <PO extends AbstractPo, DTO extends AbstractDto> PO mapDto2Po(DTO dto, JpaRepository<PO, Long> repo, Class<PO> poClass) {
        return dto.getId() == null ?
            modelMapper.map(dto, poClass) :
            repo.findById(dto.getId()).map(po -> {
                modelMapper.map(dto, po);
                return po;
            }).orElseGet(() -> modelMapper.map(dto, poClass));
    }
}
